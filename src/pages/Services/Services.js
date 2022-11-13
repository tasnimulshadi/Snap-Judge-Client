import React, { useEffect, useState } from 'react';
import useDocumentTitle from '../../utilities/useDocumentTitle';
import ServicesCard from './ServicesCard';



const Services = () => {
    useDocumentTitle("Services");
    const [services, setServices] = useState([]);
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);
    console.log(index);
    const limit = 6;
    const pages = Math.ceil(count / limit);
    const pagination = [...Array(parseInt(pages)).keys()];

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
            <div className="flex justify-center space-x-1 mt-16">
                <button
                    onClick={() => index > 0 && setIndex(index - 1)}
                    title="previous"
                    className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md"
                >
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                {/* pagination number buttons */}
                {
                    pagination.map(page =>
                        <button
                            onClick={() => setIndex(page)}
                            key={page}
                            className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md ${page === index ? "bg-blue-500 text-white" : ""}`}
                        >
                            {page + 1}
                        </button>
                    )
                }
                <button
                    onClick={() => index < pages - 1 && setIndex(index + 1)}
                    title="next"
                    className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md"
                >
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

        </div>
    );
};

export default Services;