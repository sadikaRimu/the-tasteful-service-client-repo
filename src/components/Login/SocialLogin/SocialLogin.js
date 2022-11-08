import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                // setAuthToken(user);
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <p className='text-center'><button onClick={handleGoogleSignIn} className='btn btn-outline btn-warning px-10'><FaGoogle></FaGoogle></button></p>
        </div>
    );
};

export default SocialLogin;