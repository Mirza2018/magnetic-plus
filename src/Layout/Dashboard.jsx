import React from 'react';
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu p-4'>
                    <li>
                        <NavLink to="/dashboard/userHome"><FaHome/>user Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"><FaCalendar/> user Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"><FaShoppingCart/>My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"><FaAd/>Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/orders"><FaList/>Orders</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome/>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/"><FaSearch/>Shop</NavLink>
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