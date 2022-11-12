import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div className='container mx-auto max-w-7xl min-h-screen'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;