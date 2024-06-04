import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ item }) => {
    const { _id,name,price,img,desc,catergories } = item


    const navigate = useNavigate()

  
    return (
        // <a className="group" >
        //     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" onClick={() => {navigate(`/category/${_id}`) }} >
        //         <img
        //             src={img}
        //             alt=''
        //             className="h-full w-full object-cover object-center group-hover:opacity-75"
        //         />
        //     </div>
        //     <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
        // <p className="mt-1 text-lg font-medium text-gray-900">{ "\u09F3"} {price}</p>
        // </a>


        <div className="relative group"  onClick={() => {navigate(`/category/${_id}`) }}  >
        <div className="overflow-hidden aspect-w-1 aspect-h-1" >
            <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={img} alt="" />
        </div>
        <div className="absolute left-3 top-3">
            <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">New</p>
        </div>
        <div className="flex items-start justify-between mt-4 space-x-4">
            <div>
                <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    <a  title="">
                        {name}
                        <span className="absolute inset-0" aria-hidden="true"></span>
                    </a>
                </h3>
                
            </div>

            <div className="text-right">
                <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">{ "\u09F3"} {price}</p>
            </div>
        </div>
    </div>


    );
};

export default Product;