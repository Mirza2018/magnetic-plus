import { useParams } from "react-router-dom";
import useItems from "../../Hooks/useItems";
import Product from "../Products/Product";


const Category = () => {
    const category = useParams();
    const [items] = useItems()
    const myCategory = category.category
    const finalItems = []

    const requidCat = items.filter(item => {
        const cats = item.categories;
        // console.log(cats);
        for (let cat of cats) {

            if (cat === myCategory) {
                finalItems.push(item)

            }
        }

    })


    return (
<section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-md mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured items</h2>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
            </div>
        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
            {finalItems.map((item) => (
                        <Product item={item} key={item._id} ></Product>
                    ))}
        </div>
        </div>
        </section>





    );
};

export default Category;