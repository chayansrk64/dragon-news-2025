import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/demo-user.png'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center w-11/12 mx-auto my-3'>
            <div></div>
            <div className='flex gap-3'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex gap-4'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-4'>Log In</button>
            </div>
            
        </nav>
    );
};

export default Navbar;