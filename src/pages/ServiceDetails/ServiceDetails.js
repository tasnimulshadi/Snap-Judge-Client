import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RatingStar from '../../components/RatingStar/RatingStar';
import ServiceReview from './ServiceReview';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


const ServiceDetails = () => {
    const data = useLoaderData();
    const { title, description, img, rating, _id } = data;
    const [reviews, setReviews] = useState([]);

    //get all reviews by service id
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, [_id]);

    return (
        <div>
            {/* details */}
            <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="px-8 rounded shadow-xl sm:p-16">
                    <div className='flex justify-between items-center'>
                        <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center">
                            {title}
                        </h2>
                        <h2 className='text-2xl'> <RatingStar rating={rating} /></h2>
                    </div>
                    <div className="flex flex-col lg:flex-row mt-10">
                        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                            <img src={img} alt="" />
                        </div>
                        <div className="lg:w-1/2">
                            <p className="mb-4 text-base text-gray-700">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center mx-10'>
                <h3 className="text-center lg:my-5 text-2xl md:text-3xl lg:text-4xl  lg:leading-[60px] font-bold ">Client Reviews</h3>
                {/* The button to open modal */}
                <Link to={`/service/addreview/${_id}`}>
                    <button className="btn btn-outline capitalize">Add A Review</button>
                </Link>
            </div>
            {
                reviews.map(rev => <ServiceReview
                    key={rev._id}
                    review={rev}
                ></ServiceReview>)

            }
        </div>
    );
};

export default ServiceDetails;