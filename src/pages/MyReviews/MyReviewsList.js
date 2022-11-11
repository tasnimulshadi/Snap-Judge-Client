import React, { useEffect } from 'react';
import { useState } from 'react';
import RatingStar from '../../components/RatingStar/RatingStar';
import { FaEdit, FaTimes } from "react-icons/fa";

const MyReviewsList = ({ review, handleReviewDelete }) => {
    const { message, rating, userName, userImg, serviceId, _id } = review;
    const [service, setService] = useState({});

    //get all reviews by service id
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
            });
    }, [serviceId]);


    return (
        <div className='flex flex-wrap justify-between px-4 py-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 shadow-lg rounded-md mx-7 mb-5'>
            <div className='w-full md:w-2/6 lg:w-1/4'>
                <div className="flex items-center space-x-3">
                    <div className='flex justify-center items-center gap-3 text-xl'>
                        <button className='p-1 text-blue-500 rounded hover:scale-150 hover:bg-blue-500 hover:text-white' title='Edit'><FaEdit /></button>
                        <button onClick={() => handleReviewDelete(_id)} className='p-1 text-red-500 rounded hover:scale-150 hover:bg-red-500 hover:text-white' title='Delete'><FaTimes /></button>
                    </div>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={userImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold mb-1">{userName}</div>
                        <div className="text-sm opacity-50"><RatingStar rating={rating}></RatingStar></div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-8/12 lg:w-3/4 mt-3 md:mt-0'>
                <h2 className='font-bold'>{service.title}</h2>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default MyReviewsList;