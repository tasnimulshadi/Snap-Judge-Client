import React, { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import useDocumentTitle from '../../utilities/useDocumentTitle';
import ServicesCard from './ServicesCard';



const Services = () => {
    useDocumentTitle("Services");
    const [services, setServices] = useState([]);
    //pagination
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);
    const limit = 6;


    //call api: all services without limit query
    useEffect(() => {
        fetch(`http://localhost:5000/services?limit=${limit}&index=${index}`)
            .then(res => res.json())
            .then(data => {
                setServices(data.services);
                setCount(data.count);
            })
    }, [index]);


    return (
        <div className='lg:pt-5 pb-5'>
            <div className="text-center">
                <h3 className="relative text-2xl md:text-3xl lg:text-4xl  lg:leading-[60px] font-bold">
                    All Services <span className='text-xs font-normal text-gray-200 absolute top-0 bg-blue-500 px-1 rounded-full'>{count}</span>
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

            {/* pagination */}
            <div className='mt-16'>
                <Pagination
                    count={count}
                    index={index}
                    setIndex={setIndex}
                    limit={limit}
                ></Pagination>
            </div>


        </div>
    );
};

export default Services;