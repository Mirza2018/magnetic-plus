import React from 'react';
import data from '../../../public/Products.json'
import Product from './Product';

const Products = () => {
    const products = data;
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((p) => (


                        <Product p={p} key={p._id} ></Product>




                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;