import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

 
const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()
    
    const { data: isAdmin,isPending:isAdmimLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            // console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin,isAdmimLoading] 
};

export default useAdmin;