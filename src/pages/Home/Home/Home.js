import React from 'react';
import useDocumentTitle from '../../../utilities/useDocumentTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import ServicesSection from '../ServicesSection/ServicesSection';


const Home = () => {
    useDocumentTitle("Home");

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