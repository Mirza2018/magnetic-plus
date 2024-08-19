import Product from './Product';
import useItems from '../../Hooks/useItems';
import { Link } from 'react-router-dom';
import LoadingOverlay from '../../Pages/LoadingOverlay/LoadingOverlay';
const Products = () => {

    const [items, refetch, loading] = useItems()
    if (items.length == 0) {
        refetch()
        return <LoadingOverlay loading={loading} />
    }

    return (


        <div>
            <span className='ms-2'>

                <Link to="/" className='btn-link no-underline underline-offset-8'> Home </Link>
                <Link to="/shop" className='btn-link no-underline underline-offset-4'> /shop </Link>

            </span>
            <div className="text-center p-10">
                <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
                    <step className="text-green-500">Magnetic </step>
                    <step className="text-red-500">plus </step>
                    Happy Shopping

                </h2>
            </div>

            <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4  justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                {items.map((item) => (
                    <Product item={item} key={item._id} ></Product>
                ))}

            </section>

        </div>





    );
};

export default Products;