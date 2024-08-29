import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useItems from "../../../Hooks/useItems";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [items, refetch] = useItems()
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to revert ${item.name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/items/${item._id}`)
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({                    
                        title: "Deleted!",
                        text: `Your item ${item.name} has been deleted.`,
                        icon: "success",
                        timer:1500
                    });
                }


            }
        });

    }
    const handleUpdateItem = () => {
        //
    }



    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry up"></SectionTitle>


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
                            <th>Price</th>
                            <th>Description</th>
                            <th>Catrgories</th>
                            <th>Update</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) =>
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
                                                    <img  loading="lazy"  src={item?.img} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>

                                            </div>
                                        </div>
                                    </td>

                                    <td>{item.price}</td>
                                    <td>{item.desc}</td>
                                    <td>
                                        <ol>
                                            {
                                                item.categories.map((cat, index) => <li key={index}>{cat}</li>)
                                            }

                                        </ol>
                                    </td>

                                    <td>
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                     <button

                                            className="btn btn-ghost btn-mg bg-orange-400">
                                            {/* <FaUserd className='text-2xl text-white' /> */}
                                            <FaEdit className='text-2xl text-white' />
                                        </button>
                                    </Link>
                                       


                                    </td>

                                    <th>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn btn-ghost btn-lg text-red-600"><FaTrashAlt />
                                        </button>
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

export default ManageItems;