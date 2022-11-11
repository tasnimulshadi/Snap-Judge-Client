import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();

    const handleAddReview = event => {
        event.preventDefault();
        const message = event.target.message.value;
        //time
        const reviewInfo = {
            serviceId: service._id,
            userId: user.uid,
            userName: user.displayName,
            userImg: user.photoURL,
            message,
            rating,
        }
        // console.log(review);
        // add review api call
        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('A review added');
                    event.target.reset();
                    navigate(`/services/${service._id}`);
                }
            });
    }

    return (
        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 mx-auto border-2 my-16">

            <div className="flex flex-col items-center w-full">
                <h2 className="font-semibold text-center mb-3">Give Your opinion about</h2>
                <h2 className="text-3xl font-semibold text-center">{service.title}</h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="font-semibold text-center">How was your experience?</span>
                    <div className="flex space-x-3 text-xl md:text-3xl">
                        {
                            [...Array(5).keys()].map(btn =>
                                <button
                                    key={btn}
                                    type="button"
                                    onClick={() => setRating(btn + 1)}
                                    className={rating > btn ? 'text-amber-400' : ''}
                                >
                                    <FaStar />
                                </button>)
                        }
                    </div>
                </div>
                <form onSubmit={handleAddReview} className="flex flex-col w-full">
                    <textarea rows="3" name='message' placeholder="Message..." className="border-2 p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900" required></textarea>
                    <button type="submit" className="py-4 my-8 font-semibold rounded-md bg-blue-500 text-white">Add Review</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;