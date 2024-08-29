import React, { useContext, useEffect, useState } from 'react';
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
  const { user,setLocalItemLength } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const [quantity, setQuantity] = useState(1); 


// setQuantity(1)
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);


useEffect(()=>{
  setQuantity(1)
},[id])


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
      // console.log(addToCart);

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
    } 
    
    
    
    else {
  


let myCart = [{
  ItemId: item._id,
  quantity // Include quantity in the addToCart object
}];


const local=localStorage.getItem('myCart')

if(local){
  
  let localParse=JSON.parse(local)


  let outherItems=localParse.filter((i)=>i.ItemId!==item._id) 

  let existingItem=localParse.find((i)=>i.ItemId===item._id)


    if(existingItem){
     

        let existingItemQuantityAdd={
          ItemId: item._id,
          quantity:existingItem.quantity + quantity
        }
  let FinalList=[...outherItems,existingItemQuantityAdd]


  setLocalItemLength(FinalList)
    localStorage.setItem("myCart",JSON.stringify(FinalList));
 
      }
      
      else{

        let FinalList=[...localParse,{
          ItemId: item._id,quantity}]


    
          setLocalItemLength(FinalList)
    localStorage.setItem("myCart",JSON.stringify(FinalList));

      }
  

}
else{

  
  console.log(3);
  setLocalItemLength(myCart)
  localStorage.setItem("myCart",JSON.stringify(myCart));
}




    }



  };

  const handlesingle=()=>{
   

    
    

  


let myCart = [{
  ItemId: item._id,
  quantity // Include quantity in the addToCart object
}];


const local=localStorage.getItem('myCart')

if(local){
  
  let localParse=JSON.parse(local)


  let outherItems=localParse.filter((i)=>i.ItemId!==item._id) 

  let existingItem=localParse.find((i)=>i.ItemId===item._id)


    if(existingItem){
     

        let existingItemQuantityAdd={
          ItemId: item._id,
          quantity:existingItem.quantity + quantity
        }
  let FinalList=[...outherItems,existingItemQuantityAdd]


  setLocalItemLength(FinalList)
    localStorage.setItem("myCart",JSON.stringify(FinalList));
 
      }
      
      else{

        let FinalList=[...localParse,{
          ItemId: item._id,quantity}]


    
          setLocalItemLength(FinalList)
    localStorage.setItem("myCart",JSON.stringify(FinalList));

      }
  

}
else{

  
  console.log(3);
  setLocalItemLength(myCart)
  localStorage.setItem("myCart",JSON.stringify(myCart));
}
  
            
            navigate("/cart");
            window.scrollTo(0, 0);
            
          }





  return (
    <div>
      <span className='ms-2'>
      <Link to="/" className='btn-link no-underline underline-offset-8'> Home </Link>
      <Link to="/shop" className='btn-link no-underline underline-offset-4'> /shop </Link>
        <Link to={`/shop/${item?.categories[0]}`} className='btn-link no-underline underline-offset-8'> /{item?.categories[0]}</Link>
                {item?.categories[1] && <Link to={`/shop/${item?.categories[1]}`} className='btn-link no-underline underline-offset-8'> /{item?.categories[1]} </Link>}
                {item?.categories[2] && <Link to={`/shop/${item?.categories[2]}`} className='btn-link no-underline underline-offset-8'> /{item?.categories[2]} </Link>}
        </span>



       <div className="bg-white dark:text-black flex relative items-center overflow-hidden">
      <div className="container px-6 py-10 mx-auto flex flex-col-reverse sm:flex-row items-center justify-center">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col  relative text-center sm:text-left">
        
          <h3 className="font-bebas-neue uppercase md:text-5xl sm:text-4xl font-black flex leading-none  text-gray-800 mt-7">
            {item?.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-700  py-4">
            {item?.desc}
          </p>
          <div>
            <p className='flex'>
              <span className='text-xl font-semibold font-mono '>Categories: </span>
              <span>
                <Link to={`/shop/${item?.categories[0]}`} className='btn-link no-underline underline-offset-8'> {item?.categories[0]}</Link>
                {item?.categories[1] && <Link to={`/shop/${item?.categories[1]}`} className='btn-link no-underline underline-offset-8'> /{item?.categories[1]} </Link>}
                {item?.categories[2] && <Link to={`/shop/${item?.categories[2]}`} className='btn-link no-underline underline-offset-8'> /{item?.categories[2]} </Link>}
              </span>
            </p>
          </div>
          <div className="flex mt-8 flex-col">
            <p className="uppercase pb-10 px-3 rounded-lg  text-xl flex justify-start items-center text-indigo-600 ">
              Price:<TbCurrencyTaka />
              <span className='font-bold'> {item?.price} Tk</span>
            </p>

  



<div className="grid  grid-cols-2 xl:grid-cols-3   gap-5 ">
      <div className="flex items-center border-2 border-green-100 rounded-full overflow-hidden justify-center mx-4">

        <button 
          className="w-full h-full  flex items-center justify-center hover:bg-red-300"
          onClick={decrement}
        >
          <AiOutlineMinus />
        </button>

        <div className="px-4 py-2">{quantity.toString().padStart(2, '0')}</div>

        <button 
          className="w-full h-full flex items-center justify-center hover:bg-green-300 "
          onClick={increment}
        >
          <AiOutlinePlus />
        </button>
      </div>


      {/* <button  onClick={handleAddToCart}  className=" py-3 px-5 rounded-full  bg-indigo-100 text-indigo-600 dark:text-white md:text-xl font-semibold transition-all duration-500 hover:bg-indigo-300 ease-in-out flex gap-2 justify-center items-center  ">



        <span><CiShoppingCart  className=' md:text-2xl '  /></span>
        <span>Add To Cart</span>
      </button> */}

      <button onClick={handleAddToCart} className='bg-teal-500 btn text-white hover:scale-105 hover:bg-teal-600 transition duration-300 outline-offset-8 border-none' ><span><CiShoppingCart  className=' md:text-2xl '  /></span>
      <span>Add To Cart</span></button>
                                       

 <div className='col-span-2 lg:col-span-1 '><button onClick={handlesingle} className='bg-teal-600 btn  border-none text-white hover:scale-105 hover:bg-teal-500 transition duration-300 ' >Buy Now</button></div>
                                                  
                                       
    </div>



          </div>
        </div>
        <div className="sm:w-1/3 lg:w-3/5 flex justify-center sm:ml-20">
          <img  loading="lazy"  src={item?.img} className="max-w-xs md:max-w-sm m-auto transition-transform transform hover:scale-105" alt={item?.name} />
        </div>
      </div>
    </div></div>
   
  );
};

export default SingleProductPage;
