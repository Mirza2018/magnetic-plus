import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const cart = () => {
    const [addToCart, refatch] = useCart()
    const totalPrice = addToCart.reduce((total, item) => (total + item.price), 0);
    const axiosSecure = useAxiosSecure();


    const handleDelete = id => {
        Swal.fire({
            title: 'Delete!!',
            text: 'Are you want to delete this item',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/addtocart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refatch()
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: `Deleted`,
                                showConfirmButton: false,
                                timer: 700
                            })
                            
                        }
                    })
            }
        })

    }


    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl">
                    Items:{addToCart.length}
                </h2>
                <h2 className="text-4xl">
                    Total Price:{totalPrice}
                </h2>
                <button className="btn btn-primary">Pay</button>
            </div>



            <div className="overflow-x-auto mb-8">
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
                            <th>price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addToCart.map((item, index) =>
                                <tr key={item._id}>
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
                                                    <img src={item.img} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>

                                            </div>
                                        </div>
                                    </td>

                                    <td>{item.price}</td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-ghost btn-lg text-red-600"><FaTrashAlt /></button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default cart;