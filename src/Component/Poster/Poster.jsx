import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.jpg";
import poster from "../../assets/_Yellow Professional Gradient Tech Internal Communication Website.png";

const Poster = () => {
    return (
        <div className="bg-white">
            <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 animate-fadeIn">
                        <div className="text-center lg:text-left">
                            <p className="text-2xl font-semibold tracking-wider uppercase ">

                                <span className='font-bold  '>Welcome to  </span>
                                <span className='text-green-500'> Magnetic</span>
                                <span className='text-red-500'> Plus</span>
                            </p>
                            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-4xl xl:text-4xl">
                                We choose Quality Over Quantity
                            </h1>
                            <p className="mt-4 text-base lg:mt-8 sm:text-xl text-blue-600">আলোয় সাজুক ঘর</p>






                          
                            <Link
                                to="shop"
                                title=""
                                className="bg-teal-600 btn text-white hover:scale-105 hover:bg-teal-500 transition duration-300  border-none p-3 m-4"
                            >  Shop Now
                            
                                <svg
                                    className="w-6 h-6 ml-8 -mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </Link>

                            <p className="mt-5 text-gray-600">
                                Already joined with us?
                                <Link to="/login" title="" className="text-blue-500 transition-all duration-200 hover:underline"> Log in</Link>
                            </p>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <img  loading="lazy"  className="w-full max-w-2xl animate-fadeIn" src={poster} alt="Promotional Poster" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Poster;
