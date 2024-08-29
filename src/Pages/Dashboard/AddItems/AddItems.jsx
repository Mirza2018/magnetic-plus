import { useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import useAxiousPublic from '../../../Hooks/useAxiousPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import LoadingOverlay from '../../LoadingOverlay/LoadingOverlay'; // Import the LoadingOverlay component

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTIG_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const [imgPreview, setImgPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const axiousPublic = useAxiousPublic();
    const axiosSecure = useAxiosSecure();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImgPreview(null);
        }
    };

    const ProductData = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const price = formData.get('price');
        const desc = formData.get('desc');
        const image = formData.get('img');
        const imageFile = new FormData();
        imageFile.append('image', image);

        let cat = formData.getAll('cat[]');
        let categories;

        if (cat.length === 0) {
            setLoading(false);
            return Swal.fire({
                icon: "error",
                title: "Please Select Category",
                text: "You can choose multiple categories"
            });
        } else {
            categories = formData.getAll('cat[]');
        }

        try {
            const res = await axiousPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            if (res.data.success) {
                const item = {
                    name, desc, price: parseFloat(price), categories, img: res.data.data.display_url
                };
                const itemRes = await axiosSecure.post('/items', item);
                if (itemRes.data.insertedId) {
                    e.target.reset();
                    setImgPreview(null);
                    Swal.fire({
                        position: "center",
                        title: `${name} is added To list`,
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Something went wrong while adding the item"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <LoadingOverlay loading={loading} />
            <SectionTitle heading="Add an Item" subHeading="What's new?"></SectionTitle>
            <form onSubmit={ProductData} className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                        <div className='flex gap-3 md:flex-row flex-col'>
                            <div >
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    required
                                    className="input input-bordered input-primary w-full max-w-xs"
                                    placeholder="Give a name"
                                />
                            </div>
                            <div>
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Product Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    required
                                    autoComplete="price"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                    placeholder="Price"
                                />
                            </div>

                        </div>

                        <div className="col-span-2">
                            <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                id="desc"
                                name="desc"
                                required
                                rows={4}
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Write a few sentences about the product."
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="img" className="block text-sm font-medium text-gray-700">Product Photo</label>
                            <div className="mt-1 flex items-center">
                                {imgPreview ? (
                                    <img  loading="lazy"  src={imgPreview} alt="Preview" className="h-20 w-20 object-cover rounded-md" />
                                ) : (
                                    <FaUserCircle className="h-12 w-12 text-gray-400" aria-hidden="true" />
                                )}
                            </div>
                            <div className="mt-4 flex justify-center rounded-md border-2 border-dashed border-gray-300 p-6">
                                <div className="space-y-1 text-center">
                                    <MdOutlineAddPhotoAlternate className="mx-auto h-12 w-12 text-gray-400" aria-hidden="true" />
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="img"
                                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2"
                                        >
                                            <span>Upload a file</span>
                                            <input id="img" name="img" type="file" className="sr-only" onChange={handleImageChange} />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 32MB</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <fieldset>
                                <legend className="text-base font-medium text-gray-900">Product Category</legend>
                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {["Chandeliers lights", "Wall lights", "Pendant lights", "Hanging lights", "Ceiling lights", "Outdoor lights", "Floor lights", "Table Lamp", "Desk Lamp", "spot light", "Basin Light", "LED Fan", "Clock Light", "Remote Control LED", "3D LED Lamp"].map((category) => (
                                        <div key={category} className="flex items-center">
                                            <input
                                                id={category}
                                                name="cat[]"
                                                type="checkbox"
                                                value={category}
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label htmlFor={category} className="ml-3 block text-sm font-medium text-gray-700">
                                                {category}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>
                    </div>


                    <div className="mt-6 flex justify-end">

                        <button
                            type="submit"
                            disabled={loading}
                            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading && 'opacity-50 cursor-not-allowed'}`}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.937l3-2.646z"></path>
                                    </svg>
                                    Processing...
                                </>
                            ) : (
                                'Save'
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddItems;

