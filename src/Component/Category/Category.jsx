import { useParams } from "react-router-dom";
import useItems from "../../Hooks/useItems";


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

        console.log(finalItems);
    })

    return (

        <div >
            hihkijihgh
        </div>





    );
};

export default Category;