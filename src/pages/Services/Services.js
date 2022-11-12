import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';


const Services = () => {
    const [services, setServices] = useState([]);

    //call api: all services without limit query
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div className='lg:pt-5 pb-10'>
            <div className="text-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl  lg:leading-[60px] font-bold">
                    All Services
                </h3>
            </div>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-5 lg:mx-0'>
                {
                    services.map(serv => <ServicesCard
                        key={serv._id}
                        service={serv}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;