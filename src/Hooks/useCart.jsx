import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

 
const useCart = () => {
    const axiosSecure=useAxiosSecure();
    const {user}=useContext(AuthContext);
    const {refetch, data: addToCart = [] } = useQuery(
        {
            queryKey: ['cart',user?.email],
            queryFn: async () => {
                const res=await axiosSecure.get(`/addtocart?email=${user.email}`)
                return res.data
            }
        }
    )
    return [addToCart,refetch ]
};

export default useCart;