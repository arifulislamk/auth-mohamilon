import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);



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
        logOut,
        loading
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