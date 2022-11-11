import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import RatingStar from '../../components/RatingStar/RatingStar';
import ServiceReview from './ServiceReview';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { title, description, img, rating, _id } = service;
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    //get all reviews by service id
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/service/${_id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data);
            })
            .catch(err => console.error(err));
    }, [_id]);

    // Add A Review button
    const handleAddReviewButton = () => {
        if (!user) {
            toast.error('Please login to Post a Review');
        }
        navigate(`/service/addreview/${_id}`);
    }

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
                <button onClick={handleAddReviewButton} className="btn btn-outline capitalize">Add A Review</button>
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