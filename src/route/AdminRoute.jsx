import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingOverlay from "../Pages/LoadingOverlay/LoadingOverlay";

 
const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isAdmin,isAdmimLoading]=useAdmin()
    const location =useLocation()
    if(loading||isAdmimLoading){
        return <LoadingOverlay loading={loading}></LoadingOverlay>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate  to="/login" state={{fron:location}} replace></Navigate>
};

export default AdminRoute;