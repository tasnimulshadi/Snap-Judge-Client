import React from 'react';
import featureSectionImg from '../../../assets/featureSectionImg.jpg';

const Features = () => {
    return (
        <section className="">
            <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
                <div className="text-center">
                    <h3 className="my-3 lg:my-5 text-3xl md:text-4xl lg:text-5xl  lg:leading-[60px] font-bold">Our Services</h3>
                    <p className="text-lg text-gray-500 capitalize">
                        Our in-house photography services team made up of professional photographers
                        <br />
                        can add value to you business or social media life
                    </p>
                </div>
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">Professional photography</h3>
                            <p className="mt-3 text-lg ">Professional photography supports strategic branding efforts with unique images tailored to each project’s needs.</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 capitalize">Custom photography tailored to your brand</h4>
                                        <p className="mt-2 ">Our creative agency has years of experience in custom photography for marketing, including technology product shots, executive portraits, in-house food styling and photo shoots and web-ready images for use on websites, print and online ads, and social media.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 capitalize">Sourcing the best in stock</h4>
                                        <p className="mt-2 ">If the situation doesn’t call for your own branding or personality and a generic shot will serve the purpose, stock photos can be used to save time and budget. But finding “good stock” images that illustrate a specific concept without feeling cheesy can become a mission impossible</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src={featureSectionImg} alt="" className="mx-auto rounded-lg shadow-lg w-96" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;