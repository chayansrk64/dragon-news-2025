import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex items-center justify-center mt-10'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
            <h3 className='text-xl font-semibold text-center'>Login to your Account</h3>
            <form>
                <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
                <p className='mt-3 text-center'>Don't have an Account? <Link to="/auth/register" className='text-secondary font-semibold underline'>Register</Link> </p>
                </fieldset>
            </form>
        </div>
        </div>
        </div>
    );
};

export default Login;