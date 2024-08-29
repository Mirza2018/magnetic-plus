import { useContext, useRef, useState } from 'react';
// import img from '../../assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from './SocialLogin';
import logo from '../../assets/logo.jpg'

import { FaEye, FaRegEyeSlash, FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import './Login.css'
import Swal from 'sweetalert2';
const Login = () => {
    const [show, setShow] = useState(false)
    const emailRef = useRef()


    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleForm = (e) => {
        e.preventDefault()
        const password = e.target.password.value;
        const email = e.target.email.value;
        // console.log(password, email);


        signIn(email, password)
            .then(result => {
                // console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'User is Not valid , Please Register',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }



    return (
        // <div className="hero min-h-screen bg-base-200">
        //     <div className="hero-content flex-col lg:flex-row">
        //         <div className="mr-12 w-1/2">

        //             <img  loading="lazy"  src='https://scontent.fdac45-1.fna.fbcdn.net/v/t39.30808-6/305215262_473556804784990_4532781082980495912_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEWrJzoIqprNL8MZB1Fse13mxRq-q5AckybFGr6rkByTMrm4POfPkmKyVhgCiakg93CGXQIfNp0SUZATozaMvea&_nc_ohc=rU6gOdxNZd0Q7kNvgFu23PL&_nc_ht=scontent.fdac45-1.fna&oh=00_AYDp9Huwj5VghLa1W0aK1_VIxU40hSGCx6ICslPtRTDIzw&oe=665CF6A3' alt="" />
        //         </div>
        //         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //             <div className="card-body">
        //                 <h1 className="text-4xl font-bold text-center">Login</h1>
        //                 <form onSubmit={handleForm}>
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text">Email</span>
        //                         </label>
        //                         <input type="text" placeholder="email" name='email' className="input input-bordered" required />
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
        //                             <Link className="label-text-alt link link-hover" to='/register'>Want to Register??</Link>
        //                         </label>
        //                     </div>
        //                     <div className="form-control mt-6">
        //                         <input className="btn btn-primary" type="submit" value="Submit" />
        //                     </div>
        //                 </form>
        //                 <div className="divider"></div>
        //                <SocialLogin></SocialLogin>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="mirza">
            <div className="logo">
                <img  loading="lazy"  src={logo} alt="" />
            </div>
            <div className="text-center mt-4 name">
                <span className='text-green-500'>Login</span>
                <span className='text-red-500'> Page</span>
            </div>
            <SocialLogin></SocialLogin>
            <form onSubmit={handleForm} className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="email" name="email" id="email" ref={emailRef} placeholder="Your Email" required />
                </div>

                <div className="form-field d-flex align-items-center flex">
                    <span className="fas fa-key"></span>
                    <input type={show ? "text" : "password"} name="password" id="password" placeholder="Password" required />
                    {
                        show ? <FaEye onClick={() => setShow(!show)} className='h2 text-red-400 text-2xl mr-4 mt-3'></FaEye>
                            :
                            <FaRegEyeSlash onClick={() => setShow(!show)} className='h2 text-green-400 text-2xl mr-4 mt-3'></FaRegEyeSlash>
                    }

                </div>




                <button className="btn mt-3">Login</button>
                {/* <button onClick={handleForgotPass} className="btn mt-3">Forgot password</button> */}
            </form>
            {/* <button className="btn mt-3 d-flex gap-2 pl-10"><FaGoogle /> Login With Google</button> */}
            {/* <button onClick={handleGithubLogin} className="btn mt-3 d-flex gap-2 pl-10"><FaGithub />Login With Github</button> */}
            {/* <button onClick={handleFacebookLogin} className="btn mt-3 d-flex gap-2 pl-10"><FaFacebook />Login With Facebook</button> */}


            <div className="text-center fs-6 flex justify-center items-center gap-2">
                <p className='text-black text-xs' >Don&#39;t Have any account </p>
                <Link className=" btn-link underline-offset-4" to="/register">Register</Link>
            </div>
        </div>
    );
};

export default Login;