import { Link, useParams } from "react-router-dom";
import useItems from "../../Hooks/useItems";
import Product from "../Products/Product";


const Category = () => {
    const category = useParams();
    const [items] = useItems()
    const myCategory = category.category

    const finalItems = []

    items.filter(item => {
        const cats = item.categories;
        // console.log(cats);
        for (let cat of cats) {

            if (cat === myCategory) {
                finalItems.push(item)
            }
        }

    })


    return (



        <div>
            <span className='ms-2'>

            <Link to="/" className='btn-link no-underline underline-offset-8'> Home </Link>
            <Link to="/shop" className='btn-link no-underline underline-offset-4'> /shop </Link>
                <Link to={`/shop/${myCategory}`} className='btn-link no-underline underline-offset-8'> /{myCategory}</Link>
            </span>
            <section className="py-10 bg-white sm:py-16 lg:py-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-md mx-auto text-center">
                        <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
                            <step className="text-green-500">Magnetic </step>
                            <step className="text-red-500">plus </step>
                            <br />
                            <p className="text-2xl pt-4"> {myCategory} Category Products List</p>

                        </h2>
                        {/* <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p> */}
                    </div>
                    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4  justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                        {finalItems.map((item) => (
                            <Product item={item} key={item._id} ></Product>
                        ))}
                    </div>
                    {
                        finalItems.length == 0 && <section className="py-16">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div
                                    className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-green-600 to-red-600 flex items-center justify-between flex-col lg:flex-row"
                                >
                                    <div className="block text-center mb-5 lg:text-left lg:mb-0">
                                        <h2
                                            className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2"
                                        >
                                            Currently we Don&#39;t have any Item about this category section.
                                        </h2>
                                        <p className="text-xl text-indigo-100">
                                            In future we add {myCategory} category Items.
                                        </p>
                                    </div>
                                    <Link
                                        to="/shop"
                                        className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500"
                                    >Shop
                                        <svg
                                            width="19"
                                            height="14"
                                            viewBox="0 0 19 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                                                stroke="#4F46E5"
                                                strokeWidth="2.4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    }

                </div>
            </section>




        </div>






    );
};

export default Category;