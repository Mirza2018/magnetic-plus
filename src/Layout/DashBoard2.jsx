import React, { useState } from 'react';
import { FaAd, FaCalendar, FaFileContract, FaHome, FaList, FaListAlt, FaSearch, FaShoppingCart, FaUsers, FaUtensils, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';
import {Logo } from '../assets/logo.jpg'; // replace with your actual logo path

const DashBoard2 = () => {
    const [isAdmin] = useAdmin();
    const [addToCart, againFetch] = useCart();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    againFetch();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='flex'>
            {/* Sidebar */}
            <div className={`w-64 min-h-screen bg-orange-400 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-20`}>
                <div className='flex items-center p-4'>
                    <Logo className='w-8 h-8' />
                    <span className='ml-2 text-xl font-bold'>Website Name</span>
                </div>
                <ul className='menu p-4'>
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome"><FaHome />Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems"><FaUtensils />Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems"><FaListAlt />Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageOrders"><FaAd />Manage Orders</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/orderHistory"><FaAd />Order History</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers"><FaUsers />All Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bestProducts"><FaUsers />Best Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/propularProducts"><FaUsers />Top Selling</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/Topselling"><FaUsers />Popular Product</NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/dashboard/cart"><FaShoppingCart />My Cart ({addToCart.length})</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/orders"><FaList />Orders</NavLink>
                            </li>
                        </>
                    )}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop"><FaSearch />Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"><FaFileContract />Contact</NavLink>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className='flex-1 lg:ml-64 p-8'>
                <div className='flex justify-between items-center mb-4 lg:hidden'>
                    <Logo className='w-8 h-8' />
                    <button onClick={toggleSidebar} className='text-2xl'>
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <Outlet />
            </div>

            {/* Overlay for mobile view */}
            {isSidebarOpen && <div className='fixed inset-0 bg-black opacity-50 lg:hidden' onClick={toggleSidebar}></div>}
        </div>
    );
};

export default DashBoard2;
