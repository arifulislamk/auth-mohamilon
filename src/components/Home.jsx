import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {

    const authinfo = useContext(AuthContext)
    console.log(authinfo)

    return (
        <div>
            <h2>This the home section: {authinfo.name}</h2>
            
        </div>
    );
};

export default Home;