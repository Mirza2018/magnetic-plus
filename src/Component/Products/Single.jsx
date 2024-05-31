// import React, { useContext } from 'react';

// import Swal from 'sweetalert2';


// import { useLocation, useNavigate } from 'react-router-dom';
// import useCart from '../../Hooks/useCarts';




// const snp = () => {
//     const { user,products } = useContext(AuthContext)
//     const navigate = useNavigate()
//     const location = useLocation()
//     const { refetch } = useCart()

 

//     const { name, img , price, desc, _id } = products;


//     const handleAddToCart = (item) => {
//         //console.log(item);
//         if (user && user.email) {
//             const addtocart = { menuItemId: _id, name, img, price, email: user.email }
//             fetch('http://localhost:5000/addtocard', {
//                 method: 'POST',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(addtocart)
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     //console.log(data);
//                     if (data.insertedId) {
//                         refetch() //refetch the items in the cart
//                         Swal.fire({
//                             position: 'center',
//                             icon: 'success',
//                             title: 'Added to Cart',
//                             showConfirmButton: false,
//                             timer: 1500
//                         })
//                     }
//                 })
//         }

//         else {
//             Swal.fire({
//                 title: 'You have to Log in first!!!',
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonColor: '#3085d6',
//                 cancelButtonColor: '#d33',
//                 confirmButtonText: 'Yes, Login!'
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     navigate('/login', { state: { from: location } })
//                 }
//             })
//         }
//     }

//     return (
        // <div className="card w-96 bg-base-100 shadow-xl">
        //     <figure><img src={img} alt="Shoes" /></figure>
        //     <p className='bg-slate-900 text-white absolute right-0 px-4 mt-4 mr-4'>${price}</p>
        //     <div className="card-body  flex flex-col items-center">
        //         <h2 className="card-title">{name}</h2>
        //         <p>{desc}</p>
        //         <div className="card-actions justify-end">
        //             <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 rounded-lg border-b-4 border-orange-400 bg-slate-200">Add to cart</button>
        //         </div>
        //     </div>

        // </div>
//     );
// };

// export default snp;