// import { Fragment } from 'react'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,

    MenuItems,
    Transition,
} from '@headlessui/react'
import { useContext } from 'react';
import { FaBars, FaCartPlus, FaShoppingCart } from 'react-icons/fa'
import { FaRegCircleUser, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider';

import logo from '../../assets/logo.jpg'

import useCart from '../../Hooks/useCart';

import { useQuery } from '@tanstack/react-query';

import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAdmin from '../../Hooks/useAdmin';





const Navbar2 = () => {

    const { user, logOut } = useContext(AuthContext)
    const [addToCart, againFetch] = useCart()
    const axiosSecure=useAxiosSecure()

    againFetch()
 
const [isAdmin]=useAdmin()

    const { data: allOrders = [], refetch } = useQuery({
        queryKey: ['allOrders'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allOrders');
            return res.data;
        }
    })
    refetch()
    // console.log(findUser, isAdmin);





    return (


        <div className="min-h-full">
            <Disclosure as="nav" className="bg-gradient-to-r from-green-300 to-red-300">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <Link to='/' className='flex items-center'>
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src={logo}
                                                alt="Magnetic plus"
                                            />
                                            <p className='ps-2 text-2xl font-semibold  opacity-80 '> Magnetic Plus</p>
                                        </Link>

                                    </div>
                                    

                                    {/* Big menu hom */}
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">


                                            <Link to='/' className='text-black font-bold hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm '>
                                                Home
                                            </Link>
                                            <Link to='/shop' className='text-black font-bold hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm '>
                                                Shop
                                            </Link>
                                            <Link to='/aboutUs' className='text-black font-bold hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm '>
                                            Contact Us
                                            </Link>


                                        </div>
                                    </div>
                                </div>


                                {user ?
                                    (isAdmin ?
                                        <div className="hidden md:block">
                                            <div className="ml-4 flex items-center md:ml-6">


                                                <Link to='dashboard/manageOrders'>
                                                    <button className="btn">
                                                        <FaCartPlus className="h-6 w-6" aria-hidden="true" />
                                                        <div className="badge badge-secondary">+{allOrders?.length}</div>
                                                    </button>
                                                </Link>

                                                <Menu as="div" className="relative ml-3">
                                                    <div>
                                                        <MenuButton className="relative flex max-w-xs items-center rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                            <span className="absolute -inset-1.5" />
                                                            <span className="sr-only">Open user menu</span>
                                                            {/* <img className="h-8 w-8 rounded-full" src={user?.photoURL} alt="" /> */}
                                                            {user?.photoURL ? <img className="h-8 w-8 rounded-full" src={user?.photoURL} alt="" /> : <FaRegCircleUser className="h-8 w-8 rounded-full" />}
                                                        </MenuButton>
                                                    </div>
                                                    <Transition
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                                                            <Link to='/dashboard/adminHome' className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700">
                                                                Admin Home
                                                            </Link>

                                                            <Link to='dashboard/manageOrders' className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700">
                                                                Manage Orders
                                                            </Link>

                                                            <Link to='/dashboard/manageItems' className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700">
                                                                Manage Items
                                                            </Link>

                                                            <Link to='/dashboard/addItems' className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700">
                                                                Add Items
                                                            </Link>

                                                            <Link to='/dashboard/allUsers' className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700">
                                                                All Users
                                                            </Link>

                                                            <a onClick={() => { logOut() }} className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700">
                                                                Log Out
                                                            </a>

                                                        </MenuItems>
                                                    </Transition>
                                                </Menu>

                                            </div>
                                        </div>

                                        :
                                        <div className="hidden md:block">
                                            <div className="ml-4 flex items-center md:ml-6">


                                                <Link to="dashboard/cart">
                                                    <button className="btn">
                                                        <FaShoppingCart className="h-6 w-6" aria-hidden="true" />
                                                        <div className="badge badge-secondary">+{addToCart.length}</div>
                                                    </button>
                                                </Link>

                                                <Menu as="div" className="relative ml-3">
                                                    <div>
                                                        <MenuButton className="relative flex max-w-xs items-center rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                            <span className="absolute -inset-1.5" />
                                                            <span className="sr-only">Open user menu</span>
                                                            {/* <img className="h-8 w-8 rounded-full" src={user?.photoURL} alt="" /> */}
                                                            {user?.photoURL ? <img className="h-8 w-8 rounded-full" src={user?.photoURL} alt="" /> : <FaRegCircleUser className="h-8 w-8 rounded-full" />}
                                                        </MenuButton>
                                                    </div>
                                                    <Transition
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >



                                                        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                                                            <Link to='dashboard/cart' className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700">
                                                                Shopping cart
                                                            </Link>
                                                            <Link to='dashboard/orders' className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700">
                                                                Orders
                                                            </Link>
                                                            <a onClick={() => { logOut() }} className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700">
                                                                Log Out
                                                            </a>
                                                        </MenuItems>



                                                    </Transition>
                                                </Menu>

                                            </div>
                                        </div>)


                                    :
                                    <Link to='/Login' className='text-black font-bold hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm hidden md:block'>
                                        Login
                                    </Link>

                                }










                                <div className="-mr-2 flex md:hidden">



                                    {/* Mobile menu button */}




                                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <FaXmark className="block h-6 w-6 " aria-hidden="true" />
                                        ) : (
                                            <FaBars className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </DisclosureButton>
                                </div>
                            </div>
                        </div>


                        {/* small home user */}
                        <DisclosurePanel className="md:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-white">

                                <DisclosureButton className=" text-gray-950  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                                    <Link to='/'>
                                        Home
                                    </Link>
                                </DisclosureButton>
                                <DisclosureButton className=" text-gray-950  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                                    <Link to='/shop'>
                                        Shop
                                    </Link>
                                </DisclosureButton>
                                <DisclosureButton className=" text-gray-950  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                                    <Link to='/aboutUs'>
                                    Contact us
                                    </Link>
                                </DisclosureButton>


                            </div>




                            {

                                user ?
                                    (isAdmin ?


                                        <div className="border-t border-gray-700 pb-3 pt-4 bg-white text-black">
                                            <div className="flex items-center px-5">
                                                <div className="flex-shrink-0">
                                                    {user?.photoURL ? <img className="h-10 w-10 rounded-full" src={user?.photoURL} alt="" /> : <FaRegCircleUser className="h-10 w-10 rounded-full" />}

                                                </div>
                                                <div className="ml-3">
                                                    <div className="text-base font-medium leading-none text-blue-600">{user?.displayName}</div>
                                                    <div className="text-sm font-medium leading-none text-blue-600 pt-2">{user?.email}</div>
                                                </div>


                                                <Link className='relative ml-auto flex-shrink-0 ' to='dashboard/manageOrders'>
                                                    <button className="btn relative ml-auto flex-shrink-0 ">
                                                        <span className="absolute -inset-1.5" />
                                                        <FaCartPlus className="h-6 w-6" aria-hidden="true" />
                                                        <div className="badge badge-secondary">+{allOrders.length}</div>
                                                    </button>
                                                </Link>
                                            </div>



                                            <div className="mt-3 space-y-1 px-2 ">


                                                <DisclosureButton className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white">
                                                    <Link to='/dashboard/adminHome'  >
                                                        Admin Home
                                                    </Link>
                                                </DisclosureButton>

                                                <DisclosureButton className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white">
                                                    <Link to='dashboard/manageOrders' >
                                                        Manage Orders
                                                    </Link>
                                                </DisclosureButton>

                                                <DisclosureButton className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white">
                                                    <Link to='/dashboard/manageItems' >
                                                        Manage Items
                                                    </Link>
                                                </DisclosureButton>

                                                <DisclosureButton className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white">
                                                    <Link to='/dashboard/addItems' >
                                                        Add Items
                                                    </Link>
                                                </DisclosureButton>

                                                <DisclosureButton className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white">
                                                    <Link to='/dashboard/allUsers' >
                                                        All Users
                                                    </Link>
                                                </DisclosureButton>


                                                <DisclosureButton className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white">
                                                    <a onClick={() => { logOut() }} >
                                                        Log out
                                                    </a>
                                                </DisclosureButton>



                                            </div>
                                        </div>


                                        :
                                        <div className="border-t border-gray-700 pb-3 pt-4 bg-white text-black">
                                            <div className="flex items-center px-5">
                                                <div className="flex-shrink-0">
                                                    {user?.photoURL ? <img className="h-10 w-10 rounded-full" src={user?.photoURL} alt="" /> : <FaRegCircleUser className="h-10 w-10 rounded-full" />}

                                                </div>
                                                <div className="ml-3">
                                                    <div className="text-base font-medium leading-none text-blue-600">{user?.displayName}</div>
                                                    <div className="text-sm font-medium leading-none text-blue-600 pt-2">{user?.email}</div>
                                                </div>


                                                <Link className='relative ml-auto flex-shrink-0 ' to='dashboard/cart'>
                                                    <button className="btn relative ml-auto flex-shrink-0 ">
                                                        <span className="absolute -inset-1.5" />
                                                        <FaShoppingCart className="h-6 w-6" aria-hidden="true" />
                                                        <div className="badge badge-secondary">+{addToCart.length}</div>
                                                    </button>
                                                </Link>
                                            </div>



                                            <div className="mt-3 space-y-1 px-2 ">


                                                <DisclosureButton className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white">
                                                    <Link to='dashboard/cart'>
                                                        Shooping Cart
                                                    </Link>
                                                </DisclosureButton>

                                                <DisclosureButton className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white">
                                                    <Link to='dashboard/orders'>
                                                        Orders
                                                    </Link>
                                                </DisclosureButton>

                                                <DisclosureButton className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white">
                                                    <Link to='' onClick={() => { logOut() }} >
                                                        Log out
                                                    </Link>
                                                </DisclosureButton>

                                            </div>
                                        </div>) :
                                    <div className="border-t border-gray-700 pb-3 pt-4 bg-white text-black">

                                        <div className="mt-3 space-y-1 px-2 ">
                                            <DisclosureButton className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white">
                                                <Link to='/logIn' >
                                                    Login
                                                </Link>
                                            </DisclosureButton>
                                        </div>
                                    </div>

                            }










                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
        </div>



    );
};

export default Navbar2;