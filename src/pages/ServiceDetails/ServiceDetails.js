import React, { useEffect, useState, useContext } from 'react';
import { useLoaderData, useNavigate, Link } from 'react-router-dom';
import RatingStar from '../../components/RatingStar/RatingStar';
import ServiceReview from './ServiceReview';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import useDocumentTitle from '../../utilities/useDocumentTitle';
import Pagination from '../../components/Pagination/Pagination';


const ServiceDetails = () => {
    useDocumentTitle("Service");
    const service = useLoaderData();
    const { title, description, img, rating, _id } = service;
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();
    //pagination
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);
    const limit = 10;


    //api call : get all reviews by Service ID
    useEffect(() => {
        fetch(`https://ph-assignment-11-service-review-server-tasnimulshadi.vercel.app/reviewsbyservice?id=${_id}&limit=${limit}&index=${index}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data.reviews);
                setCount(data.count);
            })
            .catch(err => console.error(err));
    }, [_id, index]);

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
                        <h2 className='text-2xl'>
                            <RatingStar rating={rating} />
                        </h2>
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

            {/* reviews */}
            <div className='flex justify-between items-center mx-10'>
                <h3 className="text-center lg:my-5 text-2xl md:text-3xl lg:text-4xl  lg:leading-[60px] font-bold ">
                    Client Reviews: {count}
                </h3>
                {
                    !user &&
                    <p className='text-red-400'>
                        Please login to Post a Review
                        <Link
                            to={`/service/addreview/${_id}`}
                            className='text-blue-500 hover:underline font-bold ml-3'
                        >
                            Login
                        </Link>
                    </p>
                }
                <button
                    onClick={handleAddReviewButton}
                    title={!user ? 'Please login to Post a Review' : 'Post a Review'}
                    className="btn btn-outline capitalize"
                >
                    Add A Review
                </button>

            </div>
            <div>
                {
                    reviews.length === 0 && <p className='capitalize text-center text-xl'>no reviews found . . .</p>
                }
                {
                    reviews.map(rev => <ServiceReview
                        key={rev._id}
                        review={rev}
                    ></ServiceReview>)

                }
            </div>

            {/* pagination */}
            <div className='mt-12'>
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

export default ServiceDetails;