
import { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {

    const {createUser, setUser, updateUser} = use(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const displayName = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log({name, email, photoURL, password});

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            // update user data
            updateUser({displayName, photoURL})
            .then(() => {
                setUser({...user, displayName, photoURL})
            })
            .catch(error => console.log(error))
            alert('User Created')
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        })

        
    }

    return (
         <div className='flex items-center justify-center mt-10'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
            <h3 className='text-xl font-semibold text-center'>Register to your Account</h3>
            <form onSubmit={handleRegister}>
                <fieldset className="fieldset">

                {/* name */}
                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Your Name" />
                {/* email */}
                <label className="label">Photo URL</label>
                <input type="text" name='photoURL' className="input" placeholder="Photo URL" />
                {/* email */}
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                {/* password */}
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />

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