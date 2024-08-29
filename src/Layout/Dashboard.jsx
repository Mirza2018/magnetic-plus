import  { useState } from 'react';
import { FaFileContract, FaHome, FaListAlt, FaSearch, FaShoppingCart, FaUsers,  FaBars, FaTimes,  FaRegGrinStars, FaHistory } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';
import logo from '../assets/logo.jpg';
import { HiOutlineLightBulb } from 'react-icons/hi';
import {  MdOutlineShoppingCart } from 'react-icons/md';
import { CiStar } from 'react-icons/ci';
import { FaRankingStar } from 'react-icons/fa6';

const Dashboard = () => {
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
                <Link to="/">
                <div className='flex items-center p-4 bg-white'>
                
                    <img  loading="lazy"  className="h-10 w-10 rounded-full"
                        src={logo}
                        alt="Magnetic plus" />
                    <p className='ml-2 text-xl font-bold'>
                        <step className="text-green-500">Magnetic </step>
                        <step className="text-red-500">plus </step>
                    </p>

                </div>
                </Link>
                <ul className='menu p-4'>
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome"><FaHome />Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems"><HiOutlineLightBulb className='text-xl' />Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems"><FaListAlt  />Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageOrders"><MdOutlineShoppingCart className='text-xl' />Manage Orders</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/orderHistory"><FaHistory />Order History</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers"><FaUsers className='text-xl' />All Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bestProducts"><CiStar className='text-xl' />Best Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/propularProducts"><FaRankingStar className='text-xl' />Top Selling</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/Topselling"><FaRegGrinStars className='text-xl' />Popular Product</NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/dashboard/cart"><FaShoppingCart />My Cart ({addToCart.length})</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/orders"><FaHistory />Orders</NavLink>
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
                        <NavLink to="/aboutUs"><FaFileContract />Contact</NavLink>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className='flex-1 lg:ml-64  bg-slate-50'>
                <div className='flex justify-between items-center p-3 mb-5 lg:hidden bg-slate-300'>
                <Link to="/">
                    <div className='flex justify-center items-center'>
                        <img  loading="lazy"  className="h-10 w-10 rounded-full"
                        src={logo}
                        alt="Magnetic plus" />  
                         <p className='ml-2 text-xl font-bold'>
                        <step className="text-green-500">Magnetic </step>
                        <step className="text-red-500">plus </step>
                    </p>
                    </div>

                    </Link>
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

export default Dashboard;
