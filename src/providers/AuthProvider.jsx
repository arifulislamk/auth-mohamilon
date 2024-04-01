import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setusers] = useState(null);
    const [loading,setloading] = useState(true);

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signinWithgoogle = () => {
        setloading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setusers(currentUser);
            setloading(false)
            console.log('inside from useeffect', currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authinfo = {
        user,
        createUser,
        signInUser,
        signinWithgoogle,
        logOut,
        loading,
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}