import React from 'react';
import data from '../../../public/Categories.json'
import Category from './Category';
const Categories = () => {
    const Categories = data;
    return (
        
<div className="bg-gray-100">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">

      {
                Categories.map(c =>
                    <Category c={c} key={c._id} ></Category>
                )
            }
     
      </div>
    </div>
  </div>
</div>  
    );
};

export default Categories;



 
