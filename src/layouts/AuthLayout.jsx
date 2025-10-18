import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen flex flex-col'>
            <header className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='flex-1 w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;