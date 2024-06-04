import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";



const cart = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const [addToCart, refetch] = useCart()
    const navigate = useNavigate()
    console.log(user);

    let totalPrice = addToCart.reduce((acc, item) => {
        // Use a default quantity of 1 if quantity is not provided or is zero
        const quantity = item.quantity || 1;
        return acc + (item.price * quantity);
    }, 0);

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
                            refetch()
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

    const handleOrder = async () => {

        const { value: formValues } = await Swal.fire({
            title: "Give Some Information",
            html: `
            <p>Mobile Number</p>
              <input  type="text" id="mobile" placeholder="017--" class="swal2-input">
              <p>Delivery address</p>
              <input  type="text" id="address" placeholder="জেলা,থানা, জায়গার নাম, রোড নং, বাড়ির  নাম " class="swal2-input">
            `,
            showCancelButton: true,
            confirmButtonText: "Make a Order",
            preConfirm: () => {
                return [
                    { va1: document.getElementById("mobile").value },
                    { va2: document.getElementById("address").value }
                ];
            }
        });

        const mobileNumber = formValues[0].va1;
        const deliveryAddress = formValues[1].va2;

        console.log("Mobile Number:", mobileNumber);
        console.log("Delivery Address:", deliveryAddress);
        if (mobileNumber.length > 10 && deliveryAddress.length > 10) {
            const orderDetails = {
                email: user.email, name: user.displayName, photo: user?.photoURL, orderItems: addToCart,
                mobileNumber, deliveryAddress,
            }
            console.log(orderDetails);
            const orderRes = await axiosSecure.post('/orders', orderDetails)

            if (orderRes.data.insertedId) {
                Swal.fire({
                    position: "center",
                    title: `আপনার Order টি সম্পন্ন হয়েছে`,
                    text: ` Order ID ${orderRes.data.insertedId}. 
                    আমাদের প্রতিনিধি কিছুক্ষনের মধ্যে আপনার সাথে যোগাযোগ করবে। Magnetic-Plus এর সাথে থাকার জন্য ধন্যবাদ।
                    `,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 15000
                });


                addToCart.map(cart => {
                    axiosSecure.delete(`/addtocart/${cart._id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                navigate("/dashboard/orders")

                            }
                        })
                })
            }
        }
        else {
            console.log("no");
        }

    }

    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl">
                    Total Item: {addToCart.length} Items
                </h2>
                <h2 className="text-4xl">
                    Total Price:{totalPrice} Tk
                </h2>
                <button className="btn btn-primary" onClick={handleOrder}>Order</button>
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
                            <th>Total</th>
                            <th>delete</th>
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


                                    <td>{item.price} Tk</td><td>{item?.quantity} Pcs</td>
                                    <td>
                                        {item.price} * {item?.quantity}={item.price * item?.quantity} Tk
                                    </td>



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