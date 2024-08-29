import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

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

        // console.log("1", status, "2", order.name, "3", optionValue);


        axiosSecure.patch(`/orders/admin/${order._id}?status=${status}`)
            .then(res => {

                if (res.data.modifiedCount > 0) {
                    // console.log("1", res.data);

                    if ((status === "Delivered" || status === "Cancel")&&(res.data.modifiedCount > 0)) {
                        // console.log("4",order._id);
                        axiosSecure.delete(`/orders/admin/${order._id}`)
                            .then(res => {

                                refetch()

                            })
                    }

                    refetch()
                    // console.log("1",status,'2',order.name);
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
        <div >
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
                                                        order?.photo ? <img  loading="lazy"  src={order?.photo} /> : <FcBusinessman className='w-12 h-12' />
                                                    }

                                                </div>

                                            </div>

                                            <div>
                                                <div className="font-semibold"><span className='text-pink-600'>Name: </span>{order.name}</div>
                                                <div className="font-semibold"><span className='text-pink-600'>Email: </span>{order.email}</div>
                                                <div className="font-semibold py-1"><span className='text-pink-600'>Order ID: </span> {order._id}</div>
                                                <div className=" font-semibold"><span className='text-pink-600'>Address: </span>{order.deliveryAddress}</div>
                                                <div className="font-semibold "><span className='text-pink-600'>Mobile: </span> {order.mobileNumber}</div>
                                                <div className="font-semibold "><span className='text-pink-600'>Info: </span> {order?.info}</div>
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
                                                            <img  loading="lazy"  src={singleItem?.img} />
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