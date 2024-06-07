import React from 'react';
import useOrder from '../../Hooks/useOrder';
import useItems from '../../Hooks/useItems';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { LuUsers } from 'react-icons/lu';
import { FaHistory, FaListAlt } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';


const AdminHome = () => {
    const [items] = useItems()
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    const { data: allOrders = [], } = useQuery({
        queryKey: ['allOrders'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allOrders');
            return res.data;
        }
    })

    const { data: orderHistory = []} = useQuery({
        queryKey: ['orderHistory'],
        queryFn: async () => {
            const res = await axiosSecure.get('/orderHistory');
            return res.data;
        }
    })




    return (
        <div className="grid grid-cols-1 gap-4 px-4 mt-28 sm:grid-cols-4 sm:px-8 ">
            <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                <div className="p-4 bg-green-400">
                <LuUsers className="h-12 w-12 text-white"  />

                </div>
                <div className="px-4 text-gray-700">
                    <h3 className="text-sm tracking-wider">Total Member</h3>
                    <p className="text-3xl">{users?.length}</p>
                </div>
            </div>
            <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                <div className="p-4 bg-blue-400">
                <FaListAlt  className="h-12 w-12 text-white"   />
                </div>
                <div className="px-4 text-gray-700">
                    <h3 className="text-sm tracking-wider">Total Items</h3>
                    <p className="text-3xl">{items?.length}</p>
                </div>
            </div>
            <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                <div className="p-4 bg-indigo-400">
                <MdOutlineShoppingCart  className="h-12 w-12 text-white"  />
                </div>
                <div className="px-4 text-gray-700">
                    <h3 className="text-sm tracking-wider">Order pending</h3>
                    <p className="text-3xl">{allOrders?.length}</p>
                </div>
            </div>
            <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                <div className="p-4 bg-red-400">
                <FaHistory  className="h-12 w-12 text-white"  />
                </div>
                <div className="px-4 text-gray-700">
                    <h3 className="text-sm tracking-wider">Deliverd/Cancel Order</h3>
                    <p className="text-3xl">{orderHistory?.length}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;