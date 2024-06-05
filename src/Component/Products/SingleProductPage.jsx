import React, { useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';
import useItems from '../../Hooks/useItems';

const SingleProductPage = () => {
  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const [items] = useItems()
  const navigate = useNavigate()
  const location = useLocation()

  const item = items.find(i => i._id === id)

  const axiosSecure = useAxiosSecure()
  const [, refatch] = useCart()

  const handleAddToCart = () => {

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

    // <div className="bg-white">
    //   <div className="pt-6">
    //     <nav aria-label="Breadcrumb">
    //       <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    //         {/* {product.breadcrumbs.map((breadcrumb) => (
    //           <li key={breadcrumb.id}>
    //             <div className="flex items-center">
    //               <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
    //                 {breadcrumb.name}
    //               </a>
    //               <svg
    //                 width={16}
    //                 height={20}
    //                 viewBox="0 0 16 20"
    //                 fill="currentColor"
    //                 aria-hidden="true"
    //                 className="h-5 w-4 text-gray-300"
    //               >
    //                 <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
    //               </svg>
    //             </div>
    //           </li>
    //         ))} */}
    //         <li className="text-sm">
    //           <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
    //             {product.name}
    //           </a>
    //         </li>
    //       </ol>
    //     </nav>

    //     {/* Image gallery */}
    //     <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
    //       <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
    //         <img
    //           src='https://scontent.fdac45-1.fna.fbcdn.net/v/t39.30808-6/350505712_509682027931354_8825000770997443477_n.jpg?stp=dst-jpg_p600x600&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHhYoqLC8KdfzW-41vwqDLCrv7SwRS3dsiu_tLBFLd2yKqRTpU7G5uRYqOAJX9wIJLSxChv3C_vOMhm-WB09ENi&_nc_ohc=mMYTQxg5AnQQ7kNvgHicCPu&_nc_ht=scontent.fdac45-1.fna&oh=00_AYCmJxFC2SBHVSFxMS8v1VmDLnH0TiIpFhyxpztfljpYTg&oe=665D05BA'
    //           alt={product.images[0].alt}
    //           className="h-full w-full object-cover object-center"
    //         />
    //       </div>
    //       <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
    //         <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
    //           <img
    //             src={product.images[1].src}
    //             alt={product.images[1].alt}
    //             className="h-full w-full object-cover object-center"
    //           />
    //         </div>
    //         <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
    //           <img
    //             src={product.images[2].src}
    //             alt={product.images[2].alt}
    //             className="h-full w-full object-cover object-center"
    //           />
    //         </div>
    //       </div>
    //       <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
    //         <img
    //           src={product.images[3].src}
    //           alt={product.images[3].alt}
    //           className="h-full w-full object-cover object-center"
    //         />
    //       </div>
    //     </div>

    //     {/* Product info */}
    //     <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
    //       <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
    //         <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
    //       </div>

    //       {/* Options */}
    //       <div className="mt-4 lg:row-span-3 lg:mt-0">
    //         <h2 className="sr-only">Product information</h2>
    //         <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

    //         {/* Reviews */}
    //         {/* <div className="mt-6">
    //           <h3 className="sr-only">Reviews</h3>
    //           <div className="flex items-center">
    //             <div className="flex items-center">
    //               {[0, 1, 2, 3, 4].map((rating) => (
    //                 <StarIcon
    //                   key={rating}
    //                   className={classNames(
    //                     reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
    //                     'h-5 w-5 flex-shrink-0'
    //                   )}
    //                   aria-hidden="true"
    //                 />
    //               ))}
    //               icon
    //             </div>
    //             <p className="sr-only">{reviews.average} out of 5 stars</p>
    //             <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
    //               {reviews.totalCount} reviews
    //             </a>
    //           </div>
    //         </div> */}

    //         <form className="mt-10">


    //           <PrivateRoute>
    //             < button

    //               onClick={handleAddCart}
    //               id={id}
    //               className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
    //               Add to bag
    //             </button>
    //           </PrivateRoute>




    //         </form>
    //       </div>

    //       <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
    //         {/* Description and details */}
    //         <div>
    //           <h3 className="sr-only">Descfription</h3>

    //           <div className="space-y-6">
    //             <p className="text-base text-gray-900">{product.description}</p>
    //           </div>
    //         </div>

    //         <div className="mt-10">
    //           <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

    //           <div className="mt-4">
    //             <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
    //               {product.highlights.map((highlight) => (
    //                 <li key={highlight} className="text-gray-400">
    //                   <span className="text-gray-600">{highlight}</span>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    // <div className="card w-96 bg-base-100 shadow-xl">
    //   <figure><img src={item?.img} alt="Shoes" /></figure>
    //   <p className='bg-slate-900 text-white absolute right-0 px-4 mt-4 mr-4'>{ "\u09F3"}{item?.price}</p>
    //   <div className="card-body  flex flex-col items-center">
    //     <h2 className="card-title">{item?.name}</h2>
    //     <p>{item?.desc}</p>
    //     <div className="card-actions justify-end">
    //       <button onClick={ handleAddToCart} className="btn btn-outline border-0 rounded-lg border-b-4 border-orange-400 bg-slate-200">Add to cart</button>
    //     </div>
    //   </div>

    // </div>



    
      <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
         {/* <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
            </span> */}
        <div className="container mx-auto px-6 flex flex-col-reverse sm:flex-row relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
           
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

          <div className=" sm:block sm:w-1/3 lg:w-3/5 relative">
            <img src={item?.img} className="max-w-xs md:max-w-sm m-auto" />
          </div>
        </div>
      </div>
 


  );
};

export default SingleProductPage;