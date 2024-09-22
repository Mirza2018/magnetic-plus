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
        const cpassword = e.target.cpassword.value;
        const email = e.target.email.value;
        const name = e.target.name.value;

if(password!==cpassword){
    setError("Password & Confirm Password do not match");
    return;
}

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
 
        <div className="mirza">
            <div className="logo">
                <img  loading="lazy"  src={logo} alt="" />
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
                    <input type="email" name="email" id="email" placeholder="Your Email" required />
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

                <div className="form-field d-flex align-items-center flex">
                    <span className="fas fa-key"></span>
                    <input type={show ? "text" : "password"} name="cpassword" id="cpassword" placeholder="Confirm Password" required />
                    {
                        show ? <FaEye onClick={() => setShow(!show)} className='h2 text-red-400  text-2xl mr-4 mt-3'></FaEye>
                            :
                            <FaRegEyeSlash onClick={() => setShow(!show)} className='h2 text-green-400 text-2xl mr-4 mt-3'></FaRegEyeSlash>
                    }

                </div>

                <button className="btn mt-3">Register</button>
            </form>
            <div className="text-center fs-6 flex justify-center items-center gap-2">
                <p className='text-black text-xs' >Have account? </p>
                <Link className=" btn-link underline-offset-4" to="/Login">Login</Link>
            </div>
        </div>

    );
};
export default Register;