
import { useEffect, useState } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

const FeaturedProducts = ({ products }) => {

    const navigate = useNavigate()

    const [items, setItems] = useState([]);
    useEffect(() => {

        setItems(products)

    }, [products])

    const handleNavigation = (id) => {
        navigate(`/shop/category/${id}`);
        window.scrollTo(0, 0);
      };


    return (
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

                    <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4  justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 ">
                        {
                            items.map((item) => (
                                <SwiperSlide key={item._id}>

                                        <div className='relative'  onClick={()=>handleNavigation(item._id)}>
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                className="mx-auto w-full hover:scale-105 transition-all duration-300 h-80  object-cover rounded-t-xl  "
                                            />
                                             <p className="bg-white font-medium font-sans text-black top-0 absolute right-0 px-4 mt-4 mr-4 p-1 rounded  ">{"\u09F3"}{item.price}</p>
                                        </div>



                                        <div className="mt-4 px-4">
                                            <h4 className="text-base font-semibold mb-2">Name: <span className='font-bold'>{item.name}</span></h4>

                                            <div className="flex justify-between">
                                                {/* <p className="text-black/50"> Category:{item.categories[0]}</p> */}
                                               
                                            </div>
                                            <div className='text-center pb-11'>
                                                  <button className='bg-teal-600 btn text-white'>Buy Now</button>
                                            </div>
                                          
                                        </div>

                                  



                                </SwiperSlide>
                            ))
                        }

                    </section>

                </Swiper>
            </div>
        </div>
    );
};

export default FeaturedProducts;

