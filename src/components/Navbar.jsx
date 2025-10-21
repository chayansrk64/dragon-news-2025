
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/demo-user.png'
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const {user, logOut} = use(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(() => alert('LogOut successfull!'))
        .catch(error => console.log(error))
    }

    return (
        <nav className='flex justify-between items-center w-11/12 mx-auto my-3'>
            <div>{user && user.email}</div>
            <div className='flex gap-3'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex gap-4'>
                <img className='w-12' src={`${user ? user.photoURL : userIcon}`} alt="" />
                {
                    user ? <button onClick={handleLogOut} className='btn btn-primary px-4'>Log Out</button> : 
                    <Link to="/auth/login" className='btn btn-primary px-4'>Log In</Link>
                }
                
            </div>
            
        </nav>
    );
};

export default Navbar;