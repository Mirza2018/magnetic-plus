import { useContext, useState } from 'react';
// import img from '../../assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiousPublic from '../../Hooks/useAxiousPublic';
import logo from '../../assets/logo.jpg'
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import './Register.css'
import SocialLogin from './SocialLogin';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const axiouPublic = useAxiousPublic();

    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleForm = (e) => {
        e.preventDefault()
        const password = e.target.password.value;
        const email = e.target.email.value;
        const name = e.target.name.value;
        if (password.length < 8) {
            setError("Your password must be at least 8 characters");
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateUserProfile(name)
                    .then(() => {

                        const userInfo = {
                            name, email
                        }

                        axiouPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    // console.log(loggedUser);

                                    e.target.reset()
                                    setSuccess('Registration Successfully Done')
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: `WellCome to Magneti-Plus ${name}`,
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate(from, { replace: true })
                                }
                            })




                    })

            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: `User is already Created`,
                    showConfirmButton: false,
                    timer: 1500
                })

            })

        setError('')


    }
    return (
        // <div className="hero min-h-screen bg-base-200">
        //     <div className="hero-content flex-col lg:flex-row">
        //         <div className="mr-12 w-1/2">

        //             <img src="https://scontent.fdac45-1.fna.fbcdn.net/v/t39.30808-6/305215262_473556804784990_4532781082980495912_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEWrJzoIqprNL8MZB1Fse13mxRq-q5AckybFGr6rkByTMrm4POfPkmKyVhgCiakg93CGXQIfNp0SUZATozaMvea&_nc_ohc=rU6gOdxNZd0Q7kNvgFu23PL&_nc_ht=scontent.fdac45-1.fna&oh=00_AYDp9Huwj5VghLa1W0aK1_VIxU40hSGCx6ICslPtRTDIzw&oe=665CF6A3" alt="" />
        //         </div>
        //         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //             <div className="card-body">
        //                 <h1 className="text-4xl font-bold text-center">Register Now?</h1>
        //                 <SocialLogin></SocialLogin>
        //                 <div className="divider"></div>
        //                 <form onSubmit={handleForm}>
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text">Name</span>
        //                         </label>
        //                         <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        //                     </div>
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text">Email</span>
        //                         </label>
        //                         <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        //                     </div>
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text">Password</span>
        //                         </label>
        //                         <input type={show ? "password" : "text"} placeholder="password" name='password' className="input input-bordered" required />


        //                         <button onClick={() => setShow(!show)} className="btn btn-circle">
        //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        //                         </button>

        //                         <label className="label">
        //                             <Link className="label-text-alt link link-hover" to='/login'>Want to Login??</Link>

        //                         </label>
        //                     </div>
        //                     <div className="form-control mt-6">
        //                         <input className="btn btn-primary" type="submit" value="Register" />
        //                     </div>
        //                 </form>

        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="mirza">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="text-center mt-4 name">

                <span className='text-green-500'>Register</span>
                <span className='text-red-500'> Page</span>

            </div>
            {success && <p className='text-green-600'>{success}</p>}
            {error && <p className='text-red-600'>{error}</p>}
            <SocialLogin></SocialLogin>
            <form onSubmit={handleForm} className="p-3 mt-3">

                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="name" id="name" placeholder="Your Name" required />
                </div>
                {/* if use photo */}
                {/* <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="photo" id="photo" placeholder="Your photo url" required />
                </div> */}
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="email" id="email" placeholder="Your Email" required />
                </div>

                <div className="form-field d-flex align-items-center flex">
                    <span className="fas fa-key"></span>
                    <input type={show ? "text" : "password"} name="password" id="password" placeholder="Password" required />
                    {
                        show ? <FaEye onClick={() => setShow(!show)} className='h2 text-red-400  text-2xl mr-4 mt-3'></FaEye>
                            :
                            <FaRegEyeSlash onClick={() => setShow(!show)} className='h2 text-green-400 text-2xl mr-4 mt-3'></FaRegEyeSlash>
                    }

                </div>

                <button className="btn mt-3">Login</button>
            </form>
            <div className="text-center fs-6 flex justify-center items-center gap-2">
                <p className='text-black text-xs' >Have account? </p>
                <Link className=" btn-link underline-offset-4" to="/Login">Login</Link>
            </div>
        </div>

    );
};
export default Register;