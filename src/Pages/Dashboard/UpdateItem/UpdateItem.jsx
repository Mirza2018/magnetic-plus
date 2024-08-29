import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { useState } from "react";
import useAxiousPublic from "../../../Hooks/useAxiousPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTIG_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const item = useLoaderData()
    const navigate = useNavigate()
    

    const [imgPreview, setImgPreview] = useState(null);
    const axiousPublic = useAxiousPublic()
    const axiosSecure = useAxiosSecure()
    // const [dataProcessing, setDataProcessing] = useState(<></>)

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
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const price = formData.get('price');
        const desc = formData.get('desc');

        let cat = formData.getAll('cat[]')
        let categories;

        //category update
        if (cat.length == 0) {
            categories = item.categories
        }
        else {
            categories = formData.getAll('cat[]')
        }


        const imgName = e.target.img.value

        ///Img check

        if (imgName) {
            // console.log("asi");
            const image = formData.get('img');
            const imageFile = new FormData()
            imageFile.append('image', image)

            const product = {
                name, desc, price: parseFloat(price), categories, img: imageFile
            }

            // console.log(product);
            // setDataProcessing(<progress className="progress w-56"></progress>)


            const res = await axiousPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            if (res.data.success) {
                // console.log(res.data);
                const product = {
                    name, desc, price: parseFloat(price), categories, img: res.data.data.display_url
                }
                // console.log(product);

                const itemRes = await axiosSecure.patch(`/item/${item._id}`, product)
                // console.log(itemRes.data);
                if (itemRes.data.matchedCount > 0) {
                    //show pop up


                    // setDataProcessing(<></>)
                    setImgPreview(null)
                    Swal.fire({
                        position: "center",
                        title: `     ${name} is Update & Added To list`,
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/manageItems')
                }
            }


        } else {

            const product = {
                name, desc, price: parseFloat(price), categories, img: item.img
            }
            // console.log(product);

            const itemRes = await axiosSecure.patch(`item/${item._id}`, product)
            // console.log(itemRes.data);
            if (itemRes.data.matchedCount > 0) {
                //show pop up
                e.target.reset()

                // setDataProcessing(<></>)
                setImgPreview(null)
                Swal.fire({
                    position: "center",
                    title: `     ${name} is Update & Added To list`,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/manageItems')
            }

        }


    };


    return (
        <div>
            <SectionTitle
                heading="Update Item"
                subHeading="Refresh info"
            >
            </SectionTitle>




            <form onSubmit={ProductData} className="ps-10">
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Product Name
                                    {/* {dataProcessing} */}
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="name"
                                            required
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            defaultValue={item.name}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                    Product Price
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            required
                                            autoComplete="price"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            defaultValue={item.price}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="desc" className="block text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="desc"
                                        name="desc"
                                        required
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={item.desc}
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about the Product.</p>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Product Photo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    {imgPreview ? (
                                        <img  loading="lazy"  src={imgPreview} alt="Preview" className="h-20 w-20 object-cover" />
                                    ) : (
                                        <img  loading="lazy"  src={item.img} alt="Preview" className="h-20 w-20 object-cover" />
                                    )}
                                </div>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <MdOutlineAddPhotoAlternate className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="img"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="img" name="img" type="file" className="sr-only" onChange={handleImageChange} />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 32MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 space-y-10">
                            <fieldset >
                                <legend className="text-sm font-semibold leading-6 text-gray-900">Product Category</legend>
                                <div><input type="checkbox" id="Chandeliers lights" name="cat[]" value="Chandeliers lights" /> Chandeliers lights</div>
                                <div><input type="checkbox" id="Wall lights" name="cat[]" value="Wall lights" /> Wall lights</div>
                                <div><input type="checkbox" id="Pendant lights" name="cat[]" value="Pendant lights" /> Pendant lights</div>
                                <div><input type="checkbox" id="Hanging lights" name="cat[]" value="Hanging lights" /> Hanging lights</div>
                                <div><input type="checkbox" id="Ceiling lights" name="cat[]" value="Ceiling lights" /> Ceiling lights</div>
                                <div><input type="checkbox" id="Outdoor lights" name="cat[]" value="Outdoor lights" /> Outdoor lights</div>
                                <div><input type="checkbox" id="Floor lights" name="cat[]" value="Floor lights" /> Floor lights</div>
                                <div><input type="checkbox" id="Table Lamp" name="cat[]" value="Table Lamp" /> Table Lamp</div>
                                <div><input type="checkbox" id="Desk Lamp" name="cat[]" value="Desk Lamp" /> Desk Lamp</div>
                                <div><input type="checkbox" id="spot light" name="cat[]" value="spot light" /> spot light</div>
                                <div><input type="checkbox" id="Basin Light" name="cat[]" value="Basin Light" /> Basin Light</div>
                                <div><input type="checkbox" id="LED Fan" name="cat[]" value="LED Fan" /> LED Fan</div>
                                <div><input type="checkbox" id="Clock Light" name="cat[]" value="Clock Light" />Clock Light</div>
                                <div><input type="checkbox" id="Remote Control LED" name="cat[]" value="Remote Control LED" /> Remote Control LED</div>
                                <div><input type="checkbox" id="3D LED Lamp" name="cat[]" value="3D LED Lamp" /> 3D LED Lamp</div>
                            </fieldset>
                        </div>
                    </div>
                </div>

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
            </form>

        </div>
    );
};

export default UpdateItem;