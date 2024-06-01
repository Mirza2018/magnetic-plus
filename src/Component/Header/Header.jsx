import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../Hooks/useCart';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [addToCart]=useCart()
    // console.log("user user",user);
    return (
        <div className="navbar bg-slate-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        <li><NavLink className={({ isActive }) => (isActive ? "btn  rounded-lg  border-0 text-white  bg-orange-400 m-2" : "btn  border-0 btn-outline rounded-lg border-b-4 bg-orange-400  m-2")} to='/'>Home </NavLink></li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? "btn  rounded-lg  border-0 text-white  bg-orange-400 m-2" : "btn  border-0 btn-outline rounded-lg border-b-4 bg-orange-400  m-2")} to='/'>parcent </NavLink>
                            <ul className="p-2">
                                <li><NavLink className={({ isActive }) => (isActive ? "btn  rounded-lg  border-0 text-white  bg-orange-400 m-2" : "btn  border-0 btn-outline rounded-lg border-b-4 bg-orange-400  m-2")} to='/'>sub 1 </NavLink></li>
                                <li><NavLink className={({ isActive }) => (isActive ? "btn  rounded-lg  border-0 text-white  bg-orange-400 m-2" : "btn  border-0 btn-outline rounded-lg border-b-4 bg-orange-400  m-2")} to='/'>sub 2 </NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink className={({ isActive }) => (isActive ? "btn  rounded-lg  border-0 text-white  bg-orange-400 m-2" : "btn  border-0 btn-outline rounded-lg border-b-4 bg-orange-400  m-2")} to='/about'>About </NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Magnetic-plus</a>
            </div>



            {/* Big screen */}


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className={({ isActive }) => (isActive ? "btn  rounded-lg  border-0 text-white  bg-orange-400 m-2" : "btn  border-0 btn-outline rounded-lg border-b-4 bg-orange-400  m-2")} to='/'>Home </NavLink></li>

                    <li>
                        <details>
                            <summary><NavLink className={({ isActive }) => (isActive ? "btn  rounded-lg  border-0 text-white  bg-orange-400 m-2" : "btn  border-0 btn-outline rounded-lg border-b-4 bg-orange-400  m-2")} to='/'>parent </NavLink></summary>
                            <ul className="p-2">
                                <li><NavLink className={({ isActive }) => (isActive ? "btn  rounded-lg  border-0 text-white  bg-orange-400 m-2" : "btn  border-0 btn-outline rounded-lg border-b-4 bg-orange-400  m-2")} to='/'>sub 1 </NavLink></li>
                                <li><NavLink className={({ isActive }) => (isActive ? "btn  rounded-lg  border-0 text-white  bg-orange-400 m-2" : "btn  border-0 btn-outline rounded-lg border-b-4 bg-orange-400  m-2")} to='/'>sub-2 </NavLink></li>
                            </ul>
                        </details>
                    </li>
                    <li><NavLink className={({ isActive }) => (isActive ? "btn  rounded-lg  border-0 text-white  bg-orange-400 m-2" : "btn  border-0 btn-outline rounded-lg border-b-4 bg-orange-400  m-2")} to='/about'>About </NavLink></li>

                    {user && <li><NavLink className={({ isActive }) => (isActive ? "btn  rounded-lg  border-0 text-white " : "btn  border-0 btn-outline rounded-lg border-b-4 m-2")} to='dashboard'>
                        <button className="btn">
                            <FaShoppingCart />
                            <div className="badge badge-secondary">+{addToCart.length}</div>
                        </button> </NavLink></li>}


                </ul>
            </div>
            <div className="navbar-end">
                <a onClick={() => { logOut() }} className="btn">Logout</a>
            </div>
        </div>
    );
};

export default Header;