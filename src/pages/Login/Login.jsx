import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const { logIn } = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location);

    const handleLogIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password)
        .then(result => {
            const user = result.user;
            console.log('user=>', user);
            navigate(`${location.state ? location.state : "/"}`)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });

    }
    return (
        <div className='flex items-center justify-center mt-10'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
            <h3 className='text-xl font-semibold text-center'>Login to your Account</h3>
            <form onSubmit={handleLogIn}>
                <fieldset className="fieldset">
                    
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />

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