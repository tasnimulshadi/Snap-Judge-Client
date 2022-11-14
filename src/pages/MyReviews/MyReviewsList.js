import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RatingStar from '../../components/RatingStar/RatingStar';
import { FaEdit, FaTimes, FaCheck } from "react-icons/fa";
import toast from 'react-hot-toast';

const MyReviewsList = ({ review, handleReviewDelete }) => {
    const { message, rating, userName, userImg, serviceId, _id } = review;
    const [service, setService] = useState({});

    //call api : get all reviews by Service ID
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
            });
    }, [serviceId]);


    const handleDelete = () => {
        //better-looking confirmation dialogue
        toast((t) => (
            <span>
                <div>Want To <span className='text-red-500'>DELETE</span> The Review</div>
                <div className='flex justify-between mt-2'>
                    <button
                        onClick={() => handleReviewDelete(_id, serviceId)}
                        className='flex justify-center items-center gap-2 text-xl text-green-500 border-2 rounded-lg px-2 border-transparent hover:border-green-500'
                    >
                        <FaCheck /> Yes
                    </button>
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className='flex justify-center items-center gap-2 text-xl text-red-500 border-2 rounded-lg px-2 border-transparent hover:border-red-500'
                    >
                        <FaTimes /> No
                    </button>
                </div>
            </span>
        ), {
            position: "top-center"
        });

    }


    return (
        <div className=' flex flex-wrap justify-between px-4 py-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-8 shadow-lg rounded-md mx-7 mb-5'>
            <div className='w-full md:w-1/2'>

                {/* user info and operations */}
                <div className="flex flex-row-reverse md:flex-row justify-between md:justify-start items-center space-x-5 border-2 p-2 rounded-md md:border-0">
                    {/* operations */}
                    <div className='flex justify-center items-center gap-5 text-xl'>
                        {/* Edit Button */}
                        <Link to={`/myreviews/update/${_id}`}>
                            <button
                                className='p-1 text-blue-500 rounded hover:scale-150 hover:bg-blue-500 hover:text-white'
                                title='Edit'
                            >
                                <FaEdit />
                            </button>
                        </Link>

                        {/* Delete Button */}
                        <button
                            onClick={handleDelete}
                            className='p-1 text-red-500 rounded hover:scale-150 hover:bg-red-500 hover:text-white'
                            title='Delete'
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* user info */}
                    <div className='flex items-center gap-5'>
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={userImg ? userImg : "https://mspgh.unimelb.edu.au/__data/assets/image/0011/3576098/Placeholder.jpg"} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold mb-1 leading-5">
                                {userName}
                            </div>
                            <div className="text-sm">
                                <RatingStar rating={rating}></RatingStar>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* service name & review */}
            <div className='w-full md:w-1/2 mt-3 md:mt-0 text-center'>
                <h2 className='font-bold text-xl md:text-right'>
                    {service.title}
                </h2>
                <p className={message.length < 80 ? 'md:text-right' : 'md:text-justify'}>
                    {message}
                </p>
            </div>

        </div>
    );
};

export default MyReviewsList;