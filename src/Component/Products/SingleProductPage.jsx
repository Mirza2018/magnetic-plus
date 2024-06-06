import React, { useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';
import useItems from '../../Hooks/useItems';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import useAdmin from '../../Hooks/useAdmin';

const SingleProductPage = ({ id, item }) => {
  // const { id } = useParams()
  const { user } = useContext(AuthContext)
  const [isAdmin] = useAdmin()
  // const [items] = useItems()
  const navigate = useNavigate()
  const location = useLocation()

  // const item = items.find(i => i._id === id)

  const axiosSecure = useAxiosSecure()
  const [, refatch] = useCart()

  const handleAddToCart = () => {
    if (isAdmin) {
      return Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: `Admin কোনো কিছু কিনতে পারবে না`,
        showConfirmButton: false,
        timer: 1500

      })
    }

    if (user && user.email) {
      const addToCart = { ItemId: item._id, name: item.name, img: item.img, price: item.price, email: user.email }
      console.log("ok1");

      axiosSecure.post('/addtocart', addToCart)
        .then(res => {
          console.log("ok2"); console.log(res.data);
          if (res.data.insertedId ||
            res.data.modifiedCount) {

            console.log("ok3");
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${item?.name}Added to Cart`,
              showConfirmButton: false,
              timer: 1500

            })
            // refetch the cart
            refatch()
          }
        })


    }
    else {
      Swal.fire({
        title: 'You are not Logged In',
        text: 'Please login to add ro cart',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Login!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      })
    }
  }


  return (

    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
      {/* <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
            </span> */}
      <div className="container  px-6 flex flex-col-reverse sm:flex-row relative py-16 mx-auto">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 mx-auto">

          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex leading-none dark:text-white text-gray-800">

            <span className="text-xl sm:text-5xl pt-7 sm:pt-0">
              Name: {item?.name}
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white py-4">
            {item?.desc}
          </p>
          <div className="flex mt-8">
            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
              Price:  {item?.price} Tk
            </a>
            <a onClick={handleAddToCart} href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
              Add to cart
            </a>

          </div>
        </div>

        <div className=" sm:block sm:w-1/3 lg:w-3/5 relative sm:me-20">
          <img src={item?.img} className="max-w-xs md:max-w-sm m-auto" />
        </div>
      </div>
    </div>



  );
};

export default SingleProductPage;