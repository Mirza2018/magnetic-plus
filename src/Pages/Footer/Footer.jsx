import { FaFacebook, FaFacebookSquare, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo.jpg'
import Swal from 'sweetalert2';

const Footer = () => {
    const handleForm = (e) => {
        e.preventDefault()
        
        Swal.fire({
            position: "center",
            icon: "success",
            title: `Thanks for Subscribe Magnetic Plus`,
            text: `${e.target.email.value}`,
            showConfirmButton: false,
            timer: 2500
          });
        e.target.reset()
    }
    return (
        <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <div className='flex justify-start items-center'>
                            <img  loading="lazy"  className="w-auto h-16 rounded-full" src={logo} alt="" />
                            <p className='text-2xl font-bold'> Magnetic Plus</p>
                        </div>


                        <p className="text-base leading-relaxed text-gray-600 mt-7">Magnetic Plus Electric & Electronics was founded in 2019 to give consumers a winning combination of.</p>

                        <ul className="flex items-center space-x-3 mt-9">

                            <a href="https://www.facebook.com/magneticplus.com.bd/" target="_blank"> <li className='text-3xl'>
                                <FaFacebookSquare />

                            </li></a>
                            <a href="https://www.youtube.com/@magneticplus6979/videos" target="_blank"><li className='text-3xl'>
                                <FaYoutube />
                            </li></a>

                            <a href="https://www.instagram.com/magnetic_plus/" target="_blank"> <li className='text-3xl'>
                                <FaInstagramSquare />
                            </li></a>

                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
                            </li>

                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>
                            </li>

                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Works </a>
                            </li>

                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Career </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Customer Support </a>
                            </li>

                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Delivery Details </a>
                            </li>

                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms & Conditions </a>
                            </li>

                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>

                        <form onSubmit={handleForm} method="POST" className="mt-6">
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input required type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>

                            <button className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">Subscribe</button>
                        </form>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200" />

                <p className="text-sm text-center text-black ">© Copyright 2024 | Magnetic plus | 
        <span> </span>
                     <a href='https://github.com/Mirza2018' target="_blank" className=" link link-neutral text-sky-600 underline-offset-8 font-semibold font-sans"> Takibul hasan.</a> </p>
                     {/* <Link className=" btn-link underline-offset-4" to="/register">Register</Link> */}
                   
            </div>
        </section>
    );
};

export default Footer;