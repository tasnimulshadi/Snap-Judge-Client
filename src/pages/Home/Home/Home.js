import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ServicesSection from '../ServicesSection/ServicesSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <ServicesSection />
        </div>
    );
};

export default Home;