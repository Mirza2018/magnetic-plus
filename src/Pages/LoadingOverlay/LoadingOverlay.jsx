import React from 'react';
import logo from '../../assets/logo.jpg';

const LoadingOverlay = ({ loading }) => {
    if (!loading) return null;
 
    return (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-75 flex items-center justify-center z-50">
            <div className="flex items-center">


                {/* <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.937l3-2.646z"></path>
                </svg>  */}
               <span className="loading-lg loading loading-spinner text-success"></span>

                <span className="ml-3 text-white text-lg">


                    <img  loading="lazy"  className='h-10 w-10 rounded-full' src={logo} alt="Magnetic plus" /></span>
                <span className="ml-3 text-white text-lg">
                    <span className='text-green-500'>Magnetic</span>
                    <span  className='text-red-500'>Plus</span>
                   
                    
                     </span>
            </div>
        </div>
    );
};

export default LoadingOverlay;
