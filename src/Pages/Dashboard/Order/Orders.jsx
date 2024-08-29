import React from 'react';
import useOrder from '../../../Hooks/useOrder';
import useOrderHistory from '../../../Hooks/useOrderHistory';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [orders] = useOrder();
    const [userOrderHistory] = useOrderHistory()
    // console.log(userOrderHistory);



    orders.sort((a, b) => {
        if (b.status < a.status) return -1;
        if (b.status > a.status) return 1;
        return 0;
    });

    userOrderHistory.sort((a, b) => {
        if (b.status < a.status) return -1;
        if (b.status > a.status) return 1;
        return 0;
    });



    return (

        <section className="py-24 relative container bg-slate-100">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
                    <step className="text-green-500">Magnetic </step>
                    <step className="text-red-500">plus </step>
                    Order Page
                </h2>
                <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">Thanks for making a purchase
                    you can
                    check our order summary from below</p>


                {/* Single Order box */}
                {
                    orders.map(order =>

                        <div key={order._id} className="main-box border pb-2 border-indigo-900 bg-white rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full my-20">

                            <div
                                className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200 ">
                                <div className="data">
                                    <p className="font-semibold text-base leading-7 text-black">Order Id: <span className="text-indigo-600 font-medium">{order._id}</span></p>
                                    <p className="font-semibold text-base leading-7 text-black mt-4">Order Date : <span className="text-gray-400 font-medium">{order.date} </span></p>
                                </div>
                                {/* <button
                                    className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400"> {order?.status}</button> */}



                                {/* <ul className="steps steps-horizontal py-3 px-7 font-semibold text-sm leading-7  max-lg:mt-5  ">
                                    <li className={`step step-primary `}>
                                        waiting for confirmation
                                        
                                        
                                        </li>

                                    <li className={`step
                                     ${(order?.status == 'Payment successful' || (order?.status == 'Out for Delivery')) && ' step-primary '} `}>
                                        
                                        Payment successful
                                        
                                        </li>

                                    <li className={`step ${order?.status == 'Out for Delivery' && 'step-primary'} `}>
                                        
                                        Out for Delivery
                                        
                                        </li>

                                    <li className={`step `}>
                                        
                                        Delevared
                                        </li>
                                </ul> */}
                                <ul className="steps steps-horizontal py-3 px-7 font-semibold text-sm leading-7 pt-11 ">
                                    <li className="step step-primary relative ">
                                        <span className="">Waiting for confirmation</span>
                                    </li>

                                    <li className={`step relative ${(order?.status === 'Payment successful' || order?.status === 'Out for Delivery') ? 'step-primary' : ''}`}>
                                        <span className="absolute inset-x-0 -top-12">Payment successful</span>
                                    </li>

                                    <li className={`step relative ${order?.status === 'Out for Delivery' ? 'step-primary' : ''}`}>
                                        <span className="">Out for Delivery</span>
                                    </li>

                                    <li className="step relative">
                                        <span className="absolute  inset-x-0 -top-6">Delivered</span>
                                    </li>
                                </ul>


                                {/* <ul className="flex space-x-4">
      <li className="relative flex-1 text-center">
        <span className="absolute inset-x-0 -bottom-6">Register</span>
        <div className="step step-primary w-full h-4 bg-blue-500"></div>
      </li>
      <li className="relative flex-1 text-center">
        <span className="absolute inset-x-0 -top-6">Choose plan</span>
        <div className="step step-primary w-full h-4 bg-blue-500"></div>
      </li>
      <li className="relative flex-1 text-center">
        <span className="absolute inset-x-0 -bottom-6">Purchase</span>
        <div className="step w-full h-4 bg-gray-300"></div>
      </li>
      <li className="relative flex-1 text-center">
        <span className="absolute inset-x-0 -top-6">Receive Product</span>
        <div className="step w-full h-4 bg-gray-300"></div>
      </li>
    </ul> */}


                            </div>


                            {/* Order single Product */}
                            <div className="w-full px-3 min-[400px]:px-6 bg-sky-50">

                                {/* Single order Item */}
                                {
                                    order.orderItems.map(singleItem =>

                                        <div key={singleItem._id} className="flex flex-col lg:flex-row items-center  py-6 border-b border-gray-200 gap-6 w-full">
                                            <div className="img-box max-lg:w-full">
                                                <img  loading="lazy"  src={singleItem.img} alt="Premium Watch image"
                                                    className="aspect-square w-full lg:max-w-[140px]" />
                                            </div>
                                            <div className="flex flex-row items-center w-full ">
                                                <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                                                    <div className="flex items-center">
                                                        <div className="">
                                                            <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                                                                {singleItem.name}</h2>
                                                            <p className="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                                                                By: Magnetic-plus</p>
                                                            <div className="flex items-center ">
                                                                {/* <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                                                    Size: <span className="text-gray-500">100 ml</span></p> */}


                                                                <p className="font-medium text-base leading-7 text-black ">Qty: <span
                                                                    className="text-gray-500">{singleItem.quantity}</span></p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="grid grid-cols-5">

                                                        <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                                            <div className="flex gap-3 lg:block">
                                                                <p className="font-medium text-sm leading-7 text-black">Price*Quantity</p>
                                                                <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">{singleItem.price * singleItem.quantity} TK</p>
                                                            </div>
                                                        </div>

                                                        {/* <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                                                            <div className="flex gap-3 lg:block">
                                                                <p className="font-medium text-sm leading-7 text-black">Status
                                                                </p>
                                                                <p
                                                                    className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                                                    Ready for Delivery</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                                            <div className="flex gap-3 lg:block">
                                                                <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                                                                    Expected Delivery Time</p>
                                                                <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                                                                    23rd March 2021</p>
                                                            </div>
                                                        </div> */}

                                                    </div>
                                                </div>


                                            </div>
                                        </div>


                                    )
                                }




                            </div>

                            {/* total Price */}

                            <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
                                <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                                    <div className="data">
                                        <p className="font-semibold text-base leading-7 text-black">Mobile Number: <span className="text-indigo-600 font-medium"> {order.mobileNumber}</span></p>
                                        <p className="font-semibold text-base leading-7 text-black mt-4">Delevary Address: <span className="text-gray-400 font-medium"> {order.deliveryAddress}</span></p>
                                    </div>
                                    {/* <p className="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">Delevary Address: <span className="text-gray-500">{order.deliveryAddress}</span></p> */}

                                </div>
                                <p className="font-semibold text-lg text-black py-6">Total Price: <span className="text-indigo-600">{order.totalPrice} TK</span></p>
                            </div>


                        </div>

                    )
                }




                <p className="font-manrope font-bold text-2xl leading-10 text-black text-center">Your Order History</p>

                {
                    userOrderHistory.map(order =>

                        <div key={order._id} className="main-box border border-indigo-900 bg-white  pb-2 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full my-20">

                            <div
                                className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                                <div className="data">
                                    <p className="font-semibold text-base leading-7 text-black">Order Id: <span className="text-indigo-600 font-medium">{order._id}</span></p>
                                    <p className="font-semibold text-base leading-7 text-black mt-4">Order Date : <span className="text-gray-400 font-medium">{order.date} </span></p>
                                </div>

                                {

                                    order.status == 'Cancel' ? <button
                                        className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-red-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-red-700 hover:shadow-red-400"> {order?.status}</button>

                                        : <ul className="steps steps-horizontal py-3 px-7 font-semibold text-sm leading-7 pt-11 ">
                                            <li className='step step-primary' >waiting for confirmation</li>

                                            <li className='step step-primary relative'>
                                            <span className="absolute inset-x-0 -top-12">Payment successful</span>
                                                </li>

                                            <li className='step step-primary'>Out for Delivery</li>

                                            <li className='step step-primary relative'>
                                            <span className="absolute  inset-x-0 -top-6">Delivered</span>
                                                
                                                </li>
                                        </ul>


                                }




                                {/* <ul className="steps steps-horizontal py-3 px-7 font-semibold text-sm leading-7 pt-11 ">
                                    <li className="step step-primary relative ">
                                        <span className="">Waiting for confirmation</span>
                                    </li>

                                    <li className={`step relative ${(order?.status === 'Payment successful' || order?.status === 'Out for Delivery') ? 'step-primary' : ''}`}>
                                        <span className="absolute inset-x-0 -top-12">Payment successful</span>
                                    </li>

                                    <li className={`step relative ${order?.status === 'Out for Delivery' ? 'step-primary' : ''}`}>
                                        <span className="">Out for Delivery</span>
                                    </li>

                                    <li className="step relative">
                                        <span className="absolute  inset-x-0 -top-6">Delivered</span>
                                    </li>
                                </ul> */}





                            </div>


                            {/* Order single Product */}
                            <div className="w-full px-3 min-[400px]:px-6 bg-red-50">

                                {/* Single order Item */}
                                {
                                    order.orderItems.map(singleItem =>

                                        <div key={singleItem._id} className="flex flex-col lg:flex-row items-center  py-6 border-b border-gray-200 gap-6 w-full">
                                            <div className="img-box max-lg:w-full">
                                                <img  loading="lazy"  src={singleItem.img} alt="Premium Watch image"
                                                    className="aspect-square w-full lg:max-w-[140px]" />
                                            </div>
                                            <div className="flex flex-row items-center w-full ">
                                                <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                                                    <div className="flex items-center">
                                                        <div className="">
                                                            <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                                                                {singleItem.name}</h2>
                                                            <p className="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                                                                By: Magnetic-plus</p>
                                                            <div className="flex items-center ">
                                                                {/* <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                                                    Size: <span className="text-gray-500">100 ml</span></p> */}


                                                                <p className="font-medium text-base leading-7 text-black ">Qty: <span
                                                                    className="text-gray-500">{singleItem.quantity}</span></p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="grid grid-cols-5">

                                                        <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                                            <div className="flex gap-3 lg:block">
                                                                <p className="font-medium text-sm leading-7 text-black">Price*Quantity</p>
                                                                <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">{singleItem.price * singleItem.quantity} TK</p>
                                                            </div>
                                                        </div>

                                                        {/* <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                                                            <div className="flex gap-3 lg:block">
                                                                <p className="font-medium text-sm leading-7 text-black">Status
                                                                </p>
                                                                <p
                                                                    className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                                                    Ready for Delivery</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                                            <div className="flex gap-3 lg:block">
                                                                <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                                                                    Expected Delivery Time</p>
                                                                <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                                                                    23rd March 2021</p>
                                                            </div>
                                                        </div> */}

                                                    </div>
                                                </div>


                                            </div>
                                        </div>


                                    )
                                }




                            </div>

                            {/* total Price */}

                            <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
                                <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                                    <div className="data">
                                        <p className="font-semibold text-base leading-7 text-black">Mobile Number: <span className="text-indigo-600 font-medium"> {order.mobileNumber}</span></p>
                                        <p className="font-semibold text-base leading-7 text-black mt-4">Delevary Address: <span className="text-gray-400 font-medium"> {order.deliveryAddress}</span></p>
                                    </div>
                                    {/* <p className="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">Delevary Address: <span className="text-gray-500">{order.deliveryAddress}</span></p> */}

                                </div>
                                <p className="font-semibold text-lg text-black py-6">Total Price: <span className="text-indigo-600">{order.totalPrice} TK</span></p>
                            </div>


                        </div>

                    )
                }


                {
                    orders.length == 0 && userOrderHistory.length == 0 &&
                    <section className="py-16">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div
                                className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-green-600 to-red-600 flex items-center justify-between flex-col lg:flex-row"
                            >
                                <div className="block text-center mb-5 lg:text-left lg:mb-0">
                                    <h2
                                        className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2"
                                    >
                                        You Don&#39;t Have any Order
                                    </h2>
                                    <p className="text-xl text-indigo-100">
                                        Continue to shopping with Magnetic Plus
                                    </p>
                                </div>
                                <Link
                                    to="/shop"
                                    className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500"
                                >Shop
                                    <svg
                                        width="19"
                                        height="14"
                                        viewBox="0 0 19 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                                            stroke="#4F46E5"
                                            strokeWidth="2.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </section>
                }



            </div>
        </section>


    );
};

export default Orders;