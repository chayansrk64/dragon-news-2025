import React from 'react';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-3'>
            <img className='w=[350px]' src={logo} alt="" />
            <p className=' '>Journalism Without Fear or Favour</p>
            <button className='text-3xl btn btn-primary'>button</button>
        </div>
    );
};

export default Header;