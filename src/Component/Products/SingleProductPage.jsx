import React, { useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';
import useAdmin from '../../Hooks/useAdmin';

const SingleProductPage = ({ id, item }) => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (isAdmin) {
      return Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: `Admin কোনো কিছু কিনতে পারবে না`,
        showConfirmButton: false,
        timer: 1500
      });
    }

    if (user && user.email) {
      const addToCart = { ItemId: item._id, name: item.name, img: item.img, price: item.price, email: user.email };

      axiosSecure.post('/addtocart', addToCart)
        .then(res => {
          if (res.data.insertedId || res.data.modifiedCount) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${item?.name} Added to Cart`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch();
          }
        });
    } else {
      Swal.fire({
        title: 'You are not Logged In',
        text: 'Please login to add to cart',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Login!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 flex relative items-center overflow-hidden ">
      <div className="container px-6 py-10 mx-auto flex flex-col-reverse sm:flex-row items-center justify-center">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative  text-center sm:text-left">
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-6xl font-black flex leading-none dark:text-white text-gray-800">
            {item?.name}
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 py-4">
            {item?.desc}
          </p>
          <div className="flex mt-8 justify-center sm:justify-start space-x-4">
            <span className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md">
              Price: {item?.price} Tk
            </span>
            <button onClick={handleAddToCart} className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md transition-all duration-300 ease-in-out">
              Add to cart
            </button>
          </div>
        </div>
        <div className="sm:w-1/3 lg:w-3/5 flex justify-center sm:ml-20">
          <img src={item?.img} className="max-w-xs md:max-w-sm m-auto transition-transform transform hover:scale-105" alt={item?.name} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
