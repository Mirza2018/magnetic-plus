import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
 
const axiosSecure = axios.create({
    baseURL: 'https://magneticplus.sirony.xyz/'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut}=useContext(AuthContext)
 
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interseptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (err) {

        return Promise.reject(err);
    });

    //Interceptors 401 & 403 status 
    axiosSecure.interceptors.response.use(function (response) {
        return response;

    },async (err) => {
        const status = err.response.status;
        if (status === 401 || status === 403) {
           
            // navigate('/')
        }
        // console.log('status error', status);
        return Promise.reject(err);
    })



    return axiosSecure;
};

export default useAxiosSecure;