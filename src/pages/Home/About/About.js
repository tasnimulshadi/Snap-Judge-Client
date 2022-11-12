import React from 'react';
import { Link } from 'react-router-dom';

import aboutImg1 from '../../../assets/about/about1.jpg'
import aboutImg2 from '../../../assets/about/about2.jpg'
import aboutImg3 from '../../../assets/about/about3.jpg'

const About = () => {
    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <div className="text-center mb-10">
                <h3 className="my-3 lg:my-5 text-3xl md:text-4xl lg:text-5xl  lg:leading-[60px] font-bold">
                    About us
                </h3>
                <p className="text-lg text-gray-500 capitalize">
                    We provide photography services with team made up of professional photographers.
                </p>
            </div>
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
                            We are
                            <br className="hidden md:block" />
                            Professionals
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            We have years of experience photographing items for vintage and new brand sellers. Our photography has been used on Asos Marketplace, Depop, Etsy, eBay and more. Our photography is regularly used by and re-grammed by major Instagram profiles to promote their pages and our customers.
                            <br /><br />
                            <li>Quality at affordable prices</li>
                            <li>Access to our own photography studio</li>
                            <li>Regular and weekly shoots with models</li>
                            <li>Plus we can offer lifestyle shoots (at extra cost)</li>
                        </p>
                    </div>
                    <div>
                        <Link className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-500">
                            Learn more
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src={aboutImg1} alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src={aboutImg3} alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src={aboutImg2} alt=""
                        />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;