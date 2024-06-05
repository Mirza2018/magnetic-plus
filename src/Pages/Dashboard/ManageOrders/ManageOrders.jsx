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
        console.log(status, order.status);

        axiosSecure.patch(`/orders/admin/${order._id}?status=${status}`)
            .then(res => {

                if (res.data.modifiedCount > 0) {
                    console.log("1", res.data);

                    if (status == "Delivered" || status == "Cancel") {

                        axiosSecure.delete(`/orders/admin/${order._id}`)
                            .then(res => {
                                console.log("2", res.data);
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









        //     axiosSecure.patch(`/users/admin/${id}`)
        //     .then(res=>{
        //         if(res.data.modifiedCount>0){
        //             refetch()
        //             Swal.fire({
        //                 position: 'center',
        //                 icon: 'success',
        //                 title: 'Update role to admin',
        //                 showConfirmButton: false,
        //                 timer: 700
        //             })
        //         }
        //     })
        // }

        // Swal.fire({
        //     title: 'Delete!!',
        //     text: 'Are you want to delete this item',
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, Delete!'
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         axiosSecure.delete(`/users/${id}`)
        //             .then(res => {
        //                 if (res.data.deletedCount > 0) {
        //                     refetch()
        //                     Swal.fire({
        //                         position: 'center',
        //                         icon: 'success',
        //                         title: `Deleted`,
        //                         showConfirmButton: false,
        //                         timer: 700
        //                     })

        //                 }
        //             })
        //     }
        // })

        // fetch(`http://localhost:5000/user/admin/${user._id}?roll=${roll}&mirza=${"mirza"}`, {
        //     method: "PUT",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify([roll])
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         //console.log(data);
        //         refetch()

        //     })

    }








    // console.log(allOrders);
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
                                                <div className="">{order.name}</div>
                                                <div className="">{order.email}</div>
                                                <div className="font-bold py-1">Order ID: {order._id}</div>
                                                <div className=" py-1">{order.deliveryAddress}</div>
                                                <div className="font-bold py-1">Mobile: {order.mobileNumber}</div>
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

                                        <button className="btn btn-warning">{order.status}</button>


                                        <form onSubmit={(e) => handleRole(e, order)}>
                                            <select name="roll" onChange={() => setOptionValue(order._id)} className="select select-success w-full max-w-xs">

                                                <option disabled selected value="Update Status?" >Update Status?</option>
                                                <option className='bg-sky-400 font-bold text-white' value="Payment successful">Payment successful</option>
                                                <option className='bg-blue-400 font-bold text-white' value="Out for Delivery">Out for Delivery</option>
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