import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
    return (
        <div className='lg:mb-10 pb-10'>
            <div className="text-center">
                <h3 className="my-3 lg:my-5 text-3xl md:text-4xl lg:text-5xl  lg:leading-[60px] font-bold">Our Services</h3>
                <p className="text-lg text-gray-500 capitalize">
                    Our in-house photography services team made up of professional photographers
                    <br />
                    can add value to you business or social media life
                </p>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-5 lg:mx-0'>
                {/* {
                    services.map(s => <ServicesCard key={s._id} service={s}></ServicesCard>)
                } */}

                <div className="card border-2 border-gray-100 shadow-lg rounded-lg">
                    <figure className="p-5">
                        <img src='' alt='' className="rounded-lg h-48 sm:h-64 md:h-48 w-full object-cover" />
                    </figure>
                    <div className="card-body p-5 pt-0">
                        <h2 className="font-bold text-2xl">title</h2>
                        <div className="flex justify-between items-center">
                            <p className='text-[#FF3811] font-semibold text-xl'>Price : $</p>
                            <Link to={`/checkout/${5}`}>
                                <button className="btn bg-transparent border-0 text-[#FF3811] text-xl hover:text-white"><FaArrowRight /></button>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
            <button className='btn bg-transparent border-[#FF3811] hover:text-white text-[#FF3811] block mx-auto mt-12 rounded-md  capitalize'>More Services</button>
        </div>
    );
};

export default ServicesSection;