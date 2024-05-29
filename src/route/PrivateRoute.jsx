import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    
    if (loading) {
        return <>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
        </>
    }
    if (user?.email) {
        return children;
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate >
    }

};

export default PrivateRoute;