import React from 'react';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Poster2 = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-100 to-green-200 text-white py-20">
      <div className="pt-16 pb-32 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-32 md:mx-10 mx-auto">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl animate-pulse text-black">Magnetic Plus</h1>
            <p className="mt-4 text-xl sm:text-2xl text-gray-600">Magnetic Plus Electric & Electronics was founded in 2019 to give consumers a winning combination of quality and affordability.</p>
          </div>
          <div>
            <div className="mt-10">
              <div aria-hidden="true" className="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="relative lg:relative sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                        <img  loading="lazy"  src="https://i.ibb.co/S65WB8P/447503080-883365690470764-9183494007327700578-n.jpg" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-48 w-44 overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                        <img  loading="lazy"  src="https://i.ibb.co/98Z8gVW/255667821-1062927714492504-4006934178928296333-n.jpg" alt="" className="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-48 w-44 overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                        <img  loading="lazy"  src="https://i.ibb.co/mCpgtrL/317086569-530643369076333-1963825682357311177-n.jpg" alt="" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-40 w-44 overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                        <img  loading="lazy"  src={logo} alt="" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                        <img  loading="lazy"  src="https://i.ibb.co/BCR5j2y/Hanging-light-5.jpg" alt="" className="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                        <img  loading="lazy"  src="https://i.ibb.co/Fn7CfsM/316828705-530643359076334-4549643060316364920-n.jpg" alt="" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-48 w-44 overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-110">
                        <img  loading="lazy"  src="https://i.ibb.co/8xNrPSL/316835159-530643395742997-4726331742973910791-n.jpg" alt="" className="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/shop" className="inline-block rounded-md border border-transparent bg-teal-600 py-3 px-8 text-center font-medium text-white hover:bg-teal-500 transition duration-300 transform hover:scale-105">Shop Now</Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster2;
