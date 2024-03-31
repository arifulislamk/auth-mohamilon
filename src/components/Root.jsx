import { Outlet } from "react-router-dom";
import Nabvar from "./Nabvar";

const Root = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;