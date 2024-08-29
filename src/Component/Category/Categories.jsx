import { useNavigate } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";
import { useEffect, useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories] = useCategories();
  const navigate = useNavigate();

  const handleNavigation = (category) => {
    navigate(`/shop/${category}`);
    window.scrollTo(0, 0);
  };

  
  return (
    <div className="bg-gray-50 py-10">
      <div className="text-center max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">
          Categories :
        </h2>
      </div>
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
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
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {
              categories.map((category) => (
                <SwiperSlide key={category.name}>
                  {/* <Link to={`${category.name}`}> */}
                    <div  onClick={()=>handleNavigation(category.name)} className="bg-teal-600 shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 ">
                       <div className="p-4">
                        <h4 className="text-xl font-bold text-white text-center">
                          {category?.name}
                        </h4>
                      </div>
                      
                      <img  loading="lazy" 
                        src={category?.img}
                        alt={category?.name}
                        className="w-full  h-60 object-cover"
                      />

                     
                    </div>
                  {/* </Link> */}
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Categories;
