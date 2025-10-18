import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import LatestNews from '../components/latestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <Navbar></Navbar>
            </header>
            <main>
                <section className='left-div'></section>                
                <section className='main'>
                    <Outlet></Outlet>    
                </section>                
                <section className='right-div'></section>                
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;