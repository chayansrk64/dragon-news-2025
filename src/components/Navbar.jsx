import React, { use, useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/demo-user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const { user } = use(AuthContext)

    return (
        <nav className='flex justify-between items-center w-11/12 mx-auto my-3'>
            <div>{user && user.email}</div>
            <div className='flex gap-3'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex gap-4'>
                <img src={userIcon} alt="" />
                <Link to="/auth/login" className='btn btn-primary px-4'>Log In</Link>
            </div>
            
        </nav>
    );
};

export default Navbar;