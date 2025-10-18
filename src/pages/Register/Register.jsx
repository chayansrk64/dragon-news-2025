import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
         <div className='flex items-center justify-center mt-10'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
            <h3 className='text-xl font-semibold text-center'>Register to your Account</h3>
            <form>
                <fieldset className="fieldset">

                {/* name */}
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Your Name" />
                {/* email */}
                <label className="label">Photo URL</label>
                <input type="text" className="input" placeholder="Photo URL" />
                {/* email */}
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                {/* password */}
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                
                <button className="btn btn-neutral mt-4">Register</button>
                <p className='mt-3 text-center'>Already have an account? <Link to="/auth/login" className='text-secondary font-semibold underline'>Login</Link> </p>
                </fieldset>
            </form>
        </div>
        </div>
        </div>
    );
};

export default Register;