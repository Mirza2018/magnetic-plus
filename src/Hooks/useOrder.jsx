import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useOrder = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { refetch, data: orders = [] } =
        useQuery(
            {
                queryKey: ['orders', user?.email],
                queryFn: async () => {
                    const res = await axiosSecure.get(`/orders/?email=${user.email}`)
                    return res.data
                }
            }
        )
    return [orders, refetch]
};

export default useOrder;