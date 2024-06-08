import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ item }) => {
    const { _id,name,price,img } = item


    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate(`/shop/category/${_id}`);
        window.scrollTo(0, 0);
      };

  
    return (
  

    <div  onClick={handleNavigation} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a >
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