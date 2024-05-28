import React from 'react';

const Category = ({ c }) => {
    const { _id, img } = c

    return (

        <div className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center" />
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                    <span className="absolute inset-0"></span>
                    {_id}
                </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">Work from home accessories</p>
        </div>





    );
};

export default Category;