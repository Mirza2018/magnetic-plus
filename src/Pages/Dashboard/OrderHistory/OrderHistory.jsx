import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FcBusinessman } from "react-icons/fc";


const OrderHistory = () => {

    const axiosSecure = useAxiosSecure()
    const { data: orderHistory = [], refetch } = useQuery({
        queryKey: ['orderHistory'],
        queryFn: async () => {
            const res = await axiosSecure.get('/orderHistory');
            return res.data;
        }
    })

    orderHistory.sort((a, b) => {
        if (b.status < a.status) return -1;
        if (b.status > a.status) return 1;
        return 0;
      });


      
    // console.log(orderHistory.length);

    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl">
                    All Delevierd or canceled Order History
                </h2>
                <h2 className="text-4xl">
                    Total: {orderHistory.length}
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
                            orderHistory.map((order, index) =>
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
                                        <button className={`btn
                                            ${order.status == "Delivered" && "bg-green-500"}
                                            ${order.status == "Cancel" && "bg-red-500"}
                                            
                                          btn-success font-semibold`} >{order.status}</button>

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

export default OrderHistory;