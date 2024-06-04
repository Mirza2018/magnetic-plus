import Product from './Product';
import useItems from '../../Hooks/useItems';
const Products = () => {

const [items]=useItems()
 
    return (
        // <div className="bg-white">
        //     <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        //         <h2 className="sr-only">Products</h2>

        //         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        //             {items.map((item) => (
        //                 <Product item={item} key={item._id} ></Product>
        //             ))}
        //         </div>
        //     </div>
        // </div>

        <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-md mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured items</h2>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
    
            {/* //edit this */}

            {items.map((item) => (
                        <Product item={item} key={item._id} ></Product>
                    ))}

            </div>
        </div>
    </section>
    
    );
};

export default Products;