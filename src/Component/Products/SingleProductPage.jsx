import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';
import useAdmin from '../../Hooks/useAdmin';
import { CiShoppingCart } from 'react-icons/ci';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TbCurrencyTaka } from 'react-icons/tb';

const SingleProductPage = ({ id, item }) => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const [quantity, setQuantity] = useState(1); // Add state for quantity


  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);





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
      const addToCart = {
        ItemId: item._id,
        name: item.name,
        img: item.img,
        price: item.price,
        email: user.email,
        quantity, // Include quantity in the addToCart object
      };
      console.log(addToCart);

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
    <div>
      <span className='ms-2'>
      <Link to="/" className='btn-link no-underline underline-offset-8'> Home </Link>
      <Link to="/shop" className='btn-link no-underline underline-offset-4'> /shop </Link>
        <Link to={`/${item?.categories[0]}`} className='btn-link no-underline underline-offset-8'> /{item?.categories[0]}</Link>
                {item?.categories[1] && <Link to={`/${item?.categories[1]}`} className='btn-link no-underline underline-offset-8'> /{item?.categories[1]} </Link>}
                {item?.categories[2] && <Link to={`/${item?.categories[2]}`} className='btn-link no-underline underline-offset-8'> /{item?.categories[2]} </Link>}
        </span>



       <div className="bg-white dark:bg-gray-800 flex relative items-center overflow-hidden">
      <div className="container px-6 py-10 mx-auto flex flex-col-reverse sm:flex-row items-center justify-center">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col  relative text-center sm:text-left">
        
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-6xl font-black flex leading-none dark:text-white text-gray-800">
            {item?.name}
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 py-4">
            {item?.desc}
          </p>
          <div>
            <p className='flex'>
              <span className='text-xl font-semibold font-mono '>Categories: </span>
              <span>
                <Link to={`/${item?.categories[0]}`} className='btn-link no-underline underline-offset-8'> {item?.categories[0]}</Link>
                {item?.categories[1] && <Link to={`/${item?.categories[1]}`} className='btn-link no-underline underline-offset-8'> /{item?.categories[1]} </Link>}
                {item?.categories[2] && <Link to={`/${item?.categories[2]}`} className='btn-link no-underline underline-offset-8'> /{item?.categories[2]} </Link>}
              </span>
            </p>
          </div>
          <div className="flex mt-8 flex-col">
            <p className="uppercase pb-10 px-3 rounded-lg  text-xl flex justify-start items-center text-indigo-600 ">
              Price:<TbCurrencyTaka />
              <span className='font-bold'> {item?.price} Tk</span>
            </p>

            {/* <div className='flex gap-6 mt-10'>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(Number(e.target.value), 1))}
                  className="w-12 text-center border rounded"
                />
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>


              <button onClick={handleAddToCart} className="uppercase py-4 px-5 rounded-lg  bg-indigo-100 text-indigo-600 dark:text-white  text-lg font-semibold transition-all duration-500 hover:bg-indigo-300 ease-in-out flex gap-2 justify-center items-center">
                <CiShoppingCart className=' text-3xl' />
                Add to cart
              </button>
            </div> */}



<div className="flex items-center space-x-4 justify-center">
      <div className="flex items-center border-2 border-blue-100 rounded-full overflow-hidden">
        <button 
          className=" w-12 h-12 flex items-center justify-center hover:bg-indigo-300"
          onClick={decrement}
        >
          <AiOutlineMinus />
        </button>
        <div className="px-4 py-2">{quantity.toString().padStart(2, '0')}</div>
        <button 
          className=" w-12 h-12 flex items-center justify-center hover:bg-indigo-300 "
          onClick={increment}
        >
          <AiOutlinePlus />
        </button>
      </div>
      <button  onClick={handleAddToCart}  className="uppercase py-3 px-5 rounded-full  bg-indigo-100 text-indigo-600 dark:text-white  text-lg font-semibold transition-all duration-500 hover:bg-indigo-300 ease-in-out flex gap-2 justify-center items-center">
        <span><CiShoppingCart  className=' text-3xl'  /></span>
        <span>Add To Cart</span>
      </button>
    </div>



          </div>
        </div>
        <div className="sm:w-1/3 lg:w-3/5 flex justify-center sm:ml-20">
          <img src={item?.img} className="max-w-xs md:max-w-sm m-auto transition-transform transform hover:scale-105" alt={item?.name} />
        </div>
      </div>
    </div></div>
   
  );
};

export default SingleProductPage;
