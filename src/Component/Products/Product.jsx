import React from 'react';

const Product = ({p}) => {
    const {name,balance}=p
    return (
        <a  className="group" >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                    src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
                    alt=''
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{balance}</p>
        </a>
    );
};

export default Product;