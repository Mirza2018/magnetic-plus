import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import useItems from '../../../Hooks/useItems';
import ProductsCheckBox from '../ProductsCheckBox/ProductsCheckBox';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import LoadingOverlay from '../../LoadingOverlay/LoadingOverlay';

const PopularProducts = () => {
    const [items, refetch, loading] = useItems()
    const axiosSecure = useAxiosSecure()


  

    const ProductData = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        let cat = formData.getAll('cat[]')
        if (cat.length <= 4) {
            return Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'অন্তত পাঁচটি  Product নির্বাচন করুন',
                showConfirmButton: false,
                timer: 2000
            })
        }


        axiosSecure.post(`/popularProducts`, cat)
            .then(res => {

                if (res.data.insertedId) {
                    e.target.reset()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Updated Best Products List`,
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }

    if (items.length == 0) {
        refetch()
        return <LoadingOverlay loading={loading} />
    }
    return (
        <div>

            <SectionTitle
                heading="Popular Products"
                subHeading="Add PopularProducts"
            ></SectionTitle>
            <form onSubmit={ProductData}>


                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>

                <div className="border-b border-gray-900/10 pb-12 ps-10">
                    <div className="mt-10 space-y-10">
                        <fieldset >
                            <legend className="text-xl font-bold leading-6 text-blue-700 ">Select Popular Products List </legend>


                            {
                                items.map(item => <ProductsCheckBox item={item} key={item._id}></ProductsCheckBox>)

                            }

                        </fieldset>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default PopularProducts;