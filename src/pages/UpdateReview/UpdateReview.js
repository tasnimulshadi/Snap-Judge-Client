import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import toast from 'react-hot-toast';
import useDocumentTitle from '../../utilities/useDocumentTitle';

const UpdateReview = () => {
    useDocumentTitle("Update Review");
    const review = useLoaderData();
    const [rating, setRating] = useState(review.rating);
    const navigate = useNavigate();

    // Add Review button
    const handleUpdateReview = event => {
        event.preventDefault();
        const message = event.target.message.value;
        //time 

        const updateInfo = {
            id: review._id,
            message,
            rating
        }
        // console.log(review);

        // Api call : update review 
        fetch('http://localhost:5000/review/update', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Updated');

                    // Api call : update(patch) service rating
                    // get all the reviews rating for the service
                    // calculate average rating for the service
                    // update service rating with new rating
                    fetch(`http://localhost:5000/service/update/rating/${review.serviceId}`, {
                        method: "PATCH"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                // after review is updated into database 
                                // after service rating is updated 
                                // then navigate to the service
                                navigate('/myreviews');
                            }

                        });
                    //patch end

                }

            });
        //update review api end

    }

    return (
        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 mx-auto border-2 my-16">
            <div className="flex flex-col items-center w-full">
                <h2 className="font-semibold text-center mb-3">Update your Opinion</h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                    <div className="flex space-x-3 text-xl md:text-3xl">
                        {/*like add a review page*/}
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
                <form onSubmit={handleUpdateReview} className="flex flex-col w-full">
                    <textarea rows="3" name='message' defaultValue={review.message} placeholder="Message..." className="border-2 p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900" required></textarea>
                    <button type="submit" className="py-4 my-8 font-semibold rounded-md bg-blue-500 text-white">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;