import React from 'react';
import Header from '../components/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import LatestNews from '../components/latestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';
import Loading from '../components/Loading';

const HomeLayout = () => {
    const {state} = useNavigation();
     
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>                
                <section className='main col-span-6'>
                    {state == "loading" ? <Loading></Loading> :  <Outlet></Outlet> }
                    
                </section>                
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>             
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;