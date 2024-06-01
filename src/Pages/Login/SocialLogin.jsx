
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiousPublic from '../../Hooks/useAxiousPublic';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const axiouPublic = useAxiousPublic()
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {


                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                }
               axiouPublic.post('/users',userInfo)
               .then(res=>{
                console.log(res.data);
               })
            })
    }

    return (
        <div>
            <div className="form-control mt-6">
               
                <button onClick={handleGoogleSignIn} className="btn btn-primary" type="submit"><FaGoogle></FaGoogle> SignUp with google</button>


            </div>
        </div>
    );
};

export default SocialLogin;