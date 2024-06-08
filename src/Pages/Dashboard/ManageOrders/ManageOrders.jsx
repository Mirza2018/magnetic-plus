import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import { FcBusinessman } from 'react-icons/fc';
import Swal from 'sweetalert2';

const ManageOrders = () => {
 

    const [optionValue, setOptionValue] = useState("")

    const axiosSecure = useAxiosSecure()
    const { data: allOrders = [], refetch } = useQuery({
        queryKey: ['allOrders'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allOrders');
            return res.data;
        }
    })

    const handleRole = (e, order) => {
        e.preventDefault()
        const status = e.target.roll.value;
        setOptionValue("")
        // console.log(status, order.status);

        axiosSecure.patch(`/orders/admin/${order._id}?status=${status}`)
            .then(res => {

                if (res.data.modifiedCount > 0) {
                    // console.log("1", res.data);

                    if (status == "Delivered" || status == "Cancel") {

                        axiosSecure.delete(`/orders/admin/${order._id}`)
                            .then(res => {
                                // console.log("2", res.data);
                                refetch()

                            })
                    }
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Update ${order._id} Status to ${status}`,
                        showConfirmButton: false,
                        timer: 2000
                    })



                }
            })
    }


    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl">
                    All Orders
                </h2>
                <h2 className="text-4xl">
                    Total order: {allOrders.length}
                </h2>

            </div>

            <div className="overflow-x-auto my-8">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <th>#</th>
                            <th>Name</th>
                            <th>TotalPrice</th>
                            <th>Products</th>
                            <th>Status</th>
                            {/* <th>Action</th> */}

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((order, index) =>
                                <tr key={order._id}>
                                    {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">

                                                <div className="mask mask-squircle w-12 h-12">
                                                    {
                                                        order?.photo ? <img src={order?.photo} /> : <FcBusinessman className='w-12 h-12' />
                                                    }

                                                </div>

                                            </div>

                                            <div>
                                                <div className="font-semibold">{order.name}</div>
                                                <div className="font-semibold">{order.email}</div>
                                                <div className="font-bold py-1">Order ID: {order._id}</div>
                                                <div className=" py-1 font-bold">{order.deliveryAddress}</div>
                                                <div className="font-bold py-1 ">Mobile: {order.mobileNumber}</div>
                                            </div>

                                        </div>


                                    </td>

                                    <td> <div>
                                        <div className="font-bold">{order.totalPrice} TK</div>


                                    </div></td>

                                    <td>

                                        {
                                            order.orderItems.map(singleItem =>

                                                <div key={singleItem._id} className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={singleItem?.img} />
                                                        </div>
                                                    </div>
                                                    <div className='py-4'>
                                                        <div className="">{singleItem.name}</div>
                                                        <div className="font-bold">Qny: {singleItem.quantity} pcs</div>

                                                    </div>
                                                </div>

                                            )
                                        }

                                    </td>




                                    <td>
                                        {
                                            order.status == ""

                                        }
                                        <button className={`btn
                                            ${order.status == "Payment successful" && "bg-sky-500"}
                                            ${order.status == "Out for Delivery" && "bg-lime-500"}
                                            ${order.status == "waiting for confirmation" && "btn-warning"}
                                          btn-success font-semibold`} >{order.status}</button>


                                        <form onSubmit={(e) => handleRole(e, order)}>
                                            <select name="roll" onChange={() => setOptionValue(order._id)} className="select select-success w-full max-w-xs">

                                                <option disabled selected value="Update Status?" >Update Status?</option>
                                                <option className='bg-sky-400 font-bold text-white' value="Payment successful">Payment successful</option>
                                                <option className='bg-lime-500 font-bold text-white' value="Out for Delivery">Out for Delivery</option>
                                                <option className='bg-green-400 font-bold text-white' value="Delivered">Delivered</option>
                                                <option className='bg-red-500 font-bold text-white' value="Cancel">Cancel</option>
                                            </select>
                                            {
                                                optionValue === order._id ? <button className="btn btn-primary">submit </button> : ""
                                            }

                                        </form>





                                    </td>
                                    {/* <th>
                                        <button

                                            className="btn btn-ghost btn-lg text-red-600"><FaTrashAlt />
                                        </button>
                                    </th> */}
                                </tr>
                            )
                        }

                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default ManageOrders;