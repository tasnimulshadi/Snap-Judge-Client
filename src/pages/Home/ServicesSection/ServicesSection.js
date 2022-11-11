import React, { useEffect, useState } from 'react';
import ServicesSectionCard from './ServicesSectionCard';

const ServicesSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div className=' pb-10'>
            <div className="text-center">
                <h3 className="my-3 lg:my-5 text-3xl md:text-4xl lg:text-5xl  lg:leading-[60px] font-bold">Our Services</h3>
                <p className="text-lg text-gray-500 capitalize">
                    Our in-house photography services team made up of professional photographers
                    <br />
                    can add value to you business or social media life
                </p>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-5 lg:mx-0'>
                {
                    services.map(s => <ServicesSectionCard key={s._id} service={s}></ServicesSectionCard>)
                }

            </div>
            <button className='btn bg-transparent  hover:text-white text-black block mx-auto mt-12 rounded-md  capitalize'>More Services</button>
        </div>
    );
};

export default ServicesSection;