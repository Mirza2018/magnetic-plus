import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

 
const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isAdmin,isAdmimLoading]=useAdmin()
    const location =useLocation()
    if(loading||isAdmimLoading){
        return <progress className="profress w-56"></progress>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate  to="/login" state={{fron:location}} replace></Navigate>
};

export default AdminRoute;