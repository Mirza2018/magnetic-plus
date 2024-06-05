import Product from './Product';
import useItems from '../../Hooks/useItems';
const Products = () => {

    const [items] = useItems()

    return (
        //     <section className="py-12 bg-white sm:py-16 lg:py-20">
        //     <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        //         <div className="max-w-md mx-auto text-center">
        //             <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured items</h2>
        //             <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
        //         </div>

        //         <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">

        //         {/* //edit this */}

        //         {items.map((item) => (
        //                     <Product item={item} key={item._id} ></Product>
        //                 ))}

        //         </div>
        //     </div>
        // </section>

        <div>

            <div className="text-center p-10">
                <h1 className="font-bold text-4xl mb-4">Magnetic-plus choose best Quality Product</h1>
                <h1 className="text-3xl">Shop Now</h1>
            </div>

            <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4  justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                {/* xl:grid-cols-4 */}

                
                                {items.map((item) => (
                            <Product item={item} key={item._id} ></Product>
                        ))}
                



            </section>

        </div>





    );
};

export default Products;