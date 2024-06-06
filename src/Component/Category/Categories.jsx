// import { Swiper,SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import { useNavigate } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";

// import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';

const Categories = () => {
  const [categories] = useCategories()
  const navigate = useNavigate() 
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            {categories.map((category) => (
              <div key={category?.name} className=" group relative">
                <div className="relative h-60 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 ">
                  <img
                    onClick={ ()=>{navigate(`${category.name}`)}}
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
    </div>
  );
};
 
export default Categories;