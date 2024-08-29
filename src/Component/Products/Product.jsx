import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Product = ({ item }) => {
    const { _id,name,price,img } = item
    const { localItemLength,
      setLocalItemLength}=useContext(AuthContext)


    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate(`/shop/category/${_id}`);
        window.scrollTo(0, 0);
      };

  


      const handlesingle=(id)=>{
        console.log(id);






let myCart = [{
  ItemId: id,
  quantity:1 // Include quantity in the addToCart object
}];


const local=localStorage.getItem('myCart')

if(local){
  
  let localParse=JSON.parse(local)


  let outherItems=localParse.filter((i)=>i.ItemId!==id) 

  let existingItem=localParse.find((i)=>i.ItemId===id)


    if(existingItem){
     

        let existingItemQuantityAdd={
          ItemId: id,
          quantity:existingItem.quantity + 1
        }
  let FinalList=[...outherItems,existingItemQuantityAdd]

  setLocalItemLength(FinalList)

    localStorage.setItem("myCart",JSON.stringify(FinalList));
 
      }
      
      else{

        let FinalList=[...localParse,{
          ItemId: id,quantity:1}]

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
   

    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <div  onClick={handleNavigation}  className='cursor-pointer' >
                    <div className='relative'>
                        <img  loading="lazy"  src={img}
                            alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                            <p className="bg-white font-medium font-sans text-black top-0 absolute right-0 px-4 mt-4 mr-4 p-1 rounded  ">{ "\u09F3"}{price}</p>
                            </div>

                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">Magnetic-Plus</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">{name}</p>
                          
                               
                                
                         
                            
                            </div>
                          
                        </div>
                        <div className='text-center pb-11'>
                                                  <button onClick={()=>handlesingle(_id)} className='bg-teal-600 btn text-white hover:scale-105 hover:bg-teal-500 transition duration-300 border-none ' >Buy Now</button>
                                            </div>


                </div>


    );
};

export default Product;