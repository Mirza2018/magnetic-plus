import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import {  FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { FcBusinessman } from 'react-icons/fc';

const Allusers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    {/* For this time i am off the handleDelete , cause it is only delete mongoBD data not firebase data  */ }

    // const handleDelete = (id) => {



    //     Swal.fire({
    //         title: 'Delete!!',
    //         text: 'Are you want to delete this item',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, Delete!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axiosSecure.delete(`/users/${id}`)
    //                 .then(res => {
    //                     if (res.data.deletedCount > 0) {
    //                         refetch()
    //                         Swal.fire({
    //                             position: 'center',
    //                             icon: 'success',
    //                             title: `Deleted`,
    //                             showConfirmButton: false,
    //                             timer: 700
    //                         })

    //                     }
    //                 })
    //         }
    //     })

    // }



    const handleMakeAdmin = (id) => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Update role to admin',
                        showConfirmButton: false,
                        timer: 700
                    })
                }
            })
    }

    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl">
                    All user
                </h2>
                <h2 className="text-4xl">
                    Total user: {users.length}
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
                            <th>email</th>
                            <th>Role</th>


                            {/* <th>Action</th> */}

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
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
                                                        user?.photo ? <img  loading="lazy"  src={user?.photo} /> : <FcBusinessman className='w-12 h-12' />
                                                    }
                                                    
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>

                                            </div>
                                        </div>
                                    </td>

                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? 'Admin' : <button
                                            onClick={() => handleMakeAdmin(user._id)}
                                            className="btn btn-ghost btn-lg bg-orange-400"><FaUsers className='text-2xl text-white' />
                                        </button>}


                                    </td>

                                    {/* For this time i am off the handleDelete , cause it is only delete mongoBD data not firebase data  */}

                                    {/* <th>
                                        <button
                                            onClick={() => handleDelete(user._id)}
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

export default Allusers;