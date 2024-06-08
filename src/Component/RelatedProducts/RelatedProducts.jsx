import { useEffect, useState } from "react";
import useItems from "../../Hooks/useItems";
import Product from "../Products/Product";



const RelatedProducts = ({ finalItems }) => {

    const [ramdomItems, setRandomItems] = useState([])


    useEffect(() => {
        const numItems = 3
        let shuffled = finalItems?.sort(() => 0.5 - Math.random());
        // Get sub-array of first n elements after shuffled
        let selectedItems = shuffled.slice(0, numItems);
        return setRandomItems(selectedItems)
    }, [finalItems])


    // console.log(ramdomItems);



    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md ">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Related Products:</h2>
                 
                </div>
                <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                    {ramdomItems?.map((item) => (
                        <Product item={item} key={item._id} ></Product>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedProducts;