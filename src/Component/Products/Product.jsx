import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ item }) => {
    const { _id,name,price,img } = item


    const navigate = useNavigate()

  
    return (
  
 
    //     <div className="relative group"  onClick={() => {navigate(`/category/${_id}`) }}  >
    //     <div className="overflow-hidden aspect-w-1 aspect-h-1" >
    //         <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={img} alt="" />
    //     </div>
    //     <div className="absolute left-3 top-3">
    //         <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">New</p>
    //     </div>
    //     <div className="flex items-start justify-between mt-4 space-x-4">
    //         <div>
    //             <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
    //                 <a  title="">
    //                     {name}
    //                     <span className="absolute inset-0" aria-hidden="true"></span>
    //                 </a>
    //             </h3>
                
    //         </div>

    //         <div className="text-right">
    //             <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">{ "\u09F3"} {price}</p>
    //         </div>
    //     </div>
    // </div>

    <div   onClick={() => {navigate(`/category/${_id}`) }}  className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src={img}
                            alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">Magnetic-Plus</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">{name}</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">{ "\u09F3"}{price}</p>
                                
                            </div>
                        </div>
                    </a>
                </div>


    );
};

export default Product;