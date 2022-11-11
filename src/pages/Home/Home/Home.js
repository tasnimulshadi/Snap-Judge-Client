import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import ServicesSection from '../ServicesSection/ServicesSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <ServicesSection />
            <Features />
        </div>
    );
};

export default Home;