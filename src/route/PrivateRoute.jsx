import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingOverlay from '../Pages/LoadingOverlay/LoadingOverlay';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location);
    
    if (loading) {
        return <LoadingOverlay loading={loading}></LoadingOverlay>
    }
    if (user?.email) {
        return children;
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate >
    }

};

export default PrivateRoute;