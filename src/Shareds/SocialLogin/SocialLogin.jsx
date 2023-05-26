import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';

const SocialLogin = () => {
    const {loginWithGoogle} = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        loginWithGoogle()
        .then(() => {

            
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className=' btn btn-circle bg-red-500 border-0'><FaGoogle></FaGoogle></button>
            </div>
        </div>
    );
};

export default SocialLogin;