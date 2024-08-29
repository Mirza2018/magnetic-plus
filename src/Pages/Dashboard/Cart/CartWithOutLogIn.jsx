import { FaTrashAlt } from "react-icons/fa";
import useItems from "../../../Hooks/useItems";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiousPublic from "../../../Hooks/useAxiousPublic";
import { AuthContext } from "../../../Providers/AuthProvider";


const CartWithOutLogIn = () => {
    const { user } = useContext(AuthContext)
    const [items, refetch, loading] = useItems()

const [itemLists,setItemLists]=useState([])

const { localItemLength,
    setLocalItemLength}=useContext(AuthContext)



let date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
const axiousPublic = useAxiousPublic();

 

useEffect(()=>{
 let local=JSON.parse(localStorage.getItem("myCart")) 


   let finalItemList=[] 

local.map(item=>{

let findItem=items.find(i=>i._id===item.ItemId)

const findItemWithQuantity={...findItem, quantity:item.quantity}

finalItemList=[...finalItemList,findItemWithQuantity]

// console.log(finalItemList);

setItemLists(finalItemList)


 })

},[items])
 


 

 let totalPrice = itemLists.reduce((acc, item) => {
    // Use a default quantity of 1 if quantity is not provided or is zero
    const quantity = item.quantity || 1;
    return acc + (item.price * quantity);
}, 0);




const handleOrder=async ()=>{


    const { value: formValues } = await Swal.fire({
        // title: "Give Some Information",
        html: `
         <div styly="max-width: 700px; height: 700px;" >

                <p  style=" font-size: 1.25rem; font-weight: 600; display: flex; justify-content: flex-start;">Full Name (পুরো নাম)</p>
                <input type="text" id="name" placeholder="Enter your Name (আপনার নাম লিখুন)" style="  width: 100%;
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                resize: vertical;
                background-color: white; color: black;
                "></input>


                <p style="margin-top: 20px; font-size: 1.25rem; font-weight: 600; display: flex; justify-content: flex-start;">Phone No (ফোন নাম্বার) </p>
        
                <input type="tel" id="mobile" placeholder="+88017--" value="+880"  style="  width: 100%;
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                resize: vertical;background-color: white; color: black;">

                
        
                <p  style="font-size: 1.25rem; font-weight: 600; display: flex; justify-content: flex-start;
                  margin-top: 20px; ">Delivery Address (ঠিকানা)</p>
                <input type="text" id="address" placeholder="জেলা, থানা, জায়গার নাম, রোড নং, বাড়ির নাম"style=" width: 100%;
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                resize: vertical;background-color: white; color: black;"></input>
        
             
        
                <p  style=" margin-top: 20px; font-size: 1.25rem; font-weight: 600; display: flex; justify-content: flex-start;">Additional information</p>
                <span   style=" margin-top: 2px; font-size: 1rem; font-weight: 400; display: flex; justify-content: flex-start;">Order notes (optional)</span>
                
                <textarea id="info" placeholder="Notes about your order, e.g. special notes for delivery"  style="  width: 100%;
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                resize: vertical;background-color: white; color: black;"></textarea>
                      </div>




`,
        showCancelButton: true,
        confirmButtonText: "Make an Order",
        preConfirm: () => {
            return [
                { va1: document.getElementById("name").value },
                { va2: document.getElementById("mobile").value },
                { va3: document.getElementById("address").value },
                { va4: document.getElementById("info").value },
            ];
        }
    });
    const name = formValues[0].va1;
    const mobileNumber = formValues[1].va2;
    const deliveryAddress = formValues[2].va3;
    const info = formValues[3].va4;


// console.log(mobileNumber, deliveryAddress);


if (mobileNumber.length == 14 || mobileNumber.length == 11) {

    const orderDetails = {
        email: user?.email || "WithOut LogIn Order", name: name, orderItems: itemLists,
        mobileNumber, deliveryAddress, date, totalPrice, status: "waiting for confirmation",info
    }
    // console.log(orderDetails);

    const orderRes = await axiousPublic.post('/orders', orderDetails)

    if (orderRes.data.insertedId) {
        Swal.fire({
            position: "center",
            title: `আপনার Order টি সম্পন্ন হয়েছে`,
            text: ` Order ID ${orderRes.data.insertedId}. 
            আমাদের প্রতিনিধি কিছুক্ষনের মধ্যে আপনার সাথে যোগাযোগ করবে। Magnetic-Plus এর সাথে থাকার জন্য ধন্যবাদ।
            `,
            icon: "success",
            showConfirmButton: false,
            timer: 15000
        });

        setLocalItemLength([])
   setItemLists([])

        localStorage.setItem("myCart",JSON.stringify([]));
    }
}   else {
    Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'সঠিক Mobile Number দিন +880 সহ',
        showConfirmButton: false,
        timer: 2000
    })
}










}






const handleDelete=(id)=>{


    Swal.fire({
        title: 'Delete!!',
        text: 'Do you want to remove this product from cart',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, Remove It!'
    }).then((result) => {
        if (result.isConfirmed) {
            let local=JSON.parse(localStorage.getItem("myCart")) 
            let existingItem=local.find((i)=>i.ItemId===id)

            let outherItems=itemLists.filter((i)=>i._id!==existingItem.ItemId) 


            
  let outherItems2=local.filter((i)=>i.ItemId!==existingItem.ItemId) 



// console.log(outherItems);

            setItemLists(outherItems)

            setLocalItemLength(outherItems2)
            localStorage.setItem("myCart",JSON.stringify(outherItems2));
                    
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `Removed`,
                            showConfirmButton: false,
                            timer: 700
                        })

        }
    })

}

// console.log("100",itemLists);



    return (
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto bg-slate-200 container mt-32">
        <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center py-10">
            <step className="text-green-500">Magnetic </step>
            <step className="text-red-500">plus </step>
            Cart Page
        </h2>

        {
            itemLists.length > 0 ?
                <section className="py-24 relative bg-slate-200">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">


                        <div className="flex items-start flex-col gap-6 xl:flex-row ">
                            <div className="w-full max-w-sm md:max-w-3xl xl:max-w-sm flex items-start flex-col gap-8 max-xl:mx-auto">
                                <div className="p-6 border bg-white border-gray-200 rounded-3xl w-full group transition-all duration-500 hover:border-gray-400 ">
                                    <h2
                                        className="font-manrope font-bold text-3xl leading-10 text-black pb-6 border-b border-gray-200 ">
                                        Cart Summary
                                    </h2>
                                    <div className="data py-6 border-b border-gray-200">
                                        <div className="flex items-center justify-between gap-4 mb-5">
                                            <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">Total product costs</p>
                                            <p className="font-medium text-lg leading-8 text-gray-900">{totalPrice} Tk</p>
                                        </div>

                                    </div>

                                    <div className=" flex justify-end">
                                        <button className="bg-teal-600 btn text-white hover:scale-105 hover:bg-teal-500 transition duration-300  border-none mt-2" onClick={handleOrder}>Order Now</button>
                                    </div>

                                </div>
                            </div>


                            <div className="w-full max-w-sm md:max-w-3xl max-xl:mx-auto ">
                                <div className="grid grid-cols-1 gap-6">

                                    {
                                        itemLists.map((item,index) => <div key={item._id || index} className="rounded-3xl p-6 bg-gray-100 border border-gray-100 flex flex-col md:flex-row md:items-center gap-5 transition-all duration-500 hover:border-gray-400">
                                            <div className="img-box ">
                                                <img  loading="lazy"  src={item?.img} alt="Denim Jacket image" className="w-full md:max-w-[122px]" />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-8">
                                                <div className="">
                                                    <h2 className="font-medium text-xl leading-8 text-black mb-3">{item?.Name}</h2>
                                                    <p className="font-normal text-lg leading-8 text-gray-500 ">Name: {item?.name}</p>

                                                </div>
                                                <div className="flex items-center justify-between gap-8">

                                                    <h6 className="font-medium text-xl leading-8 text-indigo-600">{item?.quantity} pcs  {item?.price * item?.quantity} TK</h6>
                                                    <button
                                                        onClick={() => handleDelete(item._id)}
                                                        className="btn btn-ghost btn-lg text-red-600"><FaTrashAlt /></button>
                                                </div>
                                            </div>
                                        </div>
                                        )}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div
                            className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r  from-green-600 to-red-600 flex items-center justify-between flex-col lg:flex-row"
                        >
                            <div className="block text-center mb-5 lg:text-left lg:mb-0">
                                <h2
                                    className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2"
                                >
                                    You Don&#39;t Add any Product
                                </h2>
                                <p className="text-xl text-indigo-100">
                                    Continue to shopping with Magnetic Plus
                                </p>
                            </div>
                            <Link
                                to="/shop"
                                className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500"
                            >Shop
                                <svg
                                    width="19"
                                    height="14"
                                    viewBox="0 0 19 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                                        stroke="#4F46E5"
                                        strokeWidth="2.4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
        }





    </div>

    );
};

export default CartWithOutLogIn;