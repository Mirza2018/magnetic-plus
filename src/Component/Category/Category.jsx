import { useParams } from "react-router-dom";
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
            </div>
        </section>


 


    );
};

export default Category;