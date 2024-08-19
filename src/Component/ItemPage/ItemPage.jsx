import { useParams } from "react-router-dom";
import SingleProductPage from "../Products/SingleProductPage";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import useItems from "../../Hooks/useItems";
import LoadingOverlay from "../../Pages/LoadingOverlay/LoadingOverlay";

const ItemPage = () => {
    const [items, refetch, loading] = useItems()
    const { id } = useParams()
    const item = items.find(i => i._id === id)
    const myCategory = item?.categories[0] || ['Chandeliers lights']
    const finalItems = []

    if (items.length == 0) {
        refetch()
        return <LoadingOverlay loading={loading} />
    }

    items.filter(i => {
        const cats = i.categories;
        // console.log(cats);
        for (let cat of cats) {

            if (cat === myCategory) {
                finalItems.push(i)
            }
        }

    })


    return (
        <div className="pt-4">
            <SingleProductPage id={id} item={item}></SingleProductPage>
            <RelatedProducts finalItems={finalItems} ></RelatedProducts>
        </div>
    );
};

export default ItemPage;