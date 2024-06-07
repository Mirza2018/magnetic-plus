import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/AuthProvider';

const useOrderHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const { refetch, data: userOrderHistory = [] } =
        useQuery(
            {
                queryKey: ['userOrderHistory', user?.email],
                queryFn: async () => {
                    const res = await axiosSecure.get(`/userOrderHistory/?email=${user.email}`)
                    return res.data
                }
            }
        )
    return [userOrderHistory, refetch]
};

export default useOrderHistory;