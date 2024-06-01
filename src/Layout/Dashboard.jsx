import React from 'react';
import { FaAd, FaCalendar, FaFileContract, FaHome, FaList, FaListAlt,  FaSearch, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';

const Dashboard = () => {
    const [addToCart] = useCart()
    const isAdmin = true;
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu p-4'>
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome"><FaHome />Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems"><FaUtensils />Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems"><FaListAlt /> Manage Items </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageOrders"><FaAd />Manage Orders</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers"><FaUsers />All Users</NavLink>
                            </li>
                        </>
                            : <>
                                <li>
                                    <NavLink to="/dashboard/userHome"><FaHome />user Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation"><FaCalendar /> user Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart    ({addToCart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review"><FaAd />Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/orders"><FaList />Orders</NavLink>
                                </li>
                            </>
                    }
                    {/* shared link */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/"><FaSearch />Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/"><FaFileContract />Contract</NavLink>
                    </li>
                </ul>
            </div>



            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;