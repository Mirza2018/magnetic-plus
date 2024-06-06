// import { Swiper,SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import { useNavigate } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";

// import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';



import { useEffect, useRef, useState } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link, Navigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';





const Categories = () => {
  const [categories] = useCategories()
  const navigate = useNavigate()
  return (

<div>
            <div className="text-center max-w-screen-2xl container mx-auto xl:px-28 px-4">
                <h2 className="text-2xl font-bold capitalize flex mb-5">
                    Categories:
                </h2>
            </div>
<div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
            
            {/* best seller products card */}
            <div className='mb-16'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >



    {/* <h2 className="text-2xl font-bold text-gray-900">Collections</h2> */}

{/* <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">

            {categories.map((category) => (



              <div key={category?.name} className=" group relative">
                <div className="relative h-60 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 ">
                  <img
                    onClick={() => { navigate(`${category.name}`) }}
                    src={category.img}
                    alt={category?.name}
                    className="h-full w-full object-cover object-center"
                  />


                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={category?.name}>
                    <span className="absolute inset-0 capitalize" />
                    {category?.name}
                  </a>
                </h3>
              </div>



            ))}

          </div>
        </div>
      </div>
    </div> */}



                    <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4  justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                        {
                            categories.map((category) => (
                                <SwiperSlide key={category.name}>


                                    <Link to={`${category.name}`}>
                                        <div>
                                            <img
                                                src={category?.img}
                                                alt={category?.name}
                                                className="mx-auto w-full hover:scale-105 transition-all duration-300 h-80  object-cover rounded-t-xl object-center"
                                            />
                                        </div>



                                        <div className="mt-4 px-4">
                                            <h4 className="text-base font-semibold mb-2 flex items-center justify-center"> <span className='font-bold text-xl text-pink-500'>{category?.name}</span></h4>

                                            {/* <div className="flex justify-between">
                                                <p className="text-black/50"> Category:{category.categories[0]}</p>
                                                <p className="font-semibold">{"\u09F3"}{category?.price}</p>
                                            </div> */}
                                        </div>

                                    </Link>



                                </SwiperSlide>
                            ))
                        }

                    </section>





                </Swiper>
            </div>
        </div>
        </div>


   




  );
};

export default Categories;