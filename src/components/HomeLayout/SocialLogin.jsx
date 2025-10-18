import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <h3 className='font-semibold text-xl mb-3'>Login With</h3>
            <div className='space-y-3 mt-3'>
                <button className='btn btn-secondary btn-outline w-full'> <FcGoogle size={24} /> Sign in with Google</button>
                <button className='btn btn-primary btn-outline w-full'> <FaGithub size={24} /> Sign in with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;