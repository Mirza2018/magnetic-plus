
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiousPublic from '../../Hooks/useAxiousPublic';
import { useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const axiouPublic = useAxiousPublic()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                }
                axiouPublic.post('/users', userInfo)
                    .then(res => {
                        navigate(from, { replace: true })
                        // console.log(res.data);

                    })
            })

    }

    return (
        <div>
            <div className="form-control mt-6">

                <button onClick={handleGoogleSignIn} className="btn" type="submit">
                <FcGoogle className='text-2xl' /> Sign In with google</button>


            </div>
        </div>
    );
};

export default SocialLogin;