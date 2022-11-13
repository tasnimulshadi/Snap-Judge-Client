import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import MyReviewsList from './MyReviewsList';
import toast from 'react-hot-toast';
import useDocumentTitle from '../../utilities/useDocumentTitle';

const MyReviews = () => {
    useDocumentTitle("My Reviews");
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    //call api
    //get all reviews by user id
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/user/${user.uid}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, [user]);

    // DELETE
    //delete a review by id from MyReviewList.js
    const handleReviewDelete = (id, serviceId) => {

        //call delete api
        fetch(`http://localhost:5000/reviews/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    const remainingReviews = reviews.filter(rev => rev._id !== id);
                    setReviews(remainingReviews);

                    toast.success('Review Deleted', {
                        position: "top-center"
                    });

                    // Api call : update(patch) service rating
                    // get all the reviews rating for the service
                    // calculate average rating for the service
                    // update service rating with new rating
                    fetch(`http://localhost:5000/service/update/rating/${serviceId}`, {
                        method: "PATCH"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        });

                }

            });

    }


    return (
        <div>
            <div className='flex justify-between items-center mx-10'>
                <h3 className="text-center lg:my-5 text-2xl md:text-3xl lg:text-4xl  lg:leading-[60px] font-bold mb-5">
                    My Reviews: {reviews.length}
                </h3>
            </div>
            {
                reviews.length === 0 && <p className='capitalize text-center text-xl'>No reviews found . . .</p>
            }
            {
                reviews.map(rev => <MyReviewsList
                    key={rev._id}
                    review={rev}
                    handleReviewDelete={handleReviewDelete}
                ></MyReviewsList>)

            }
        </div>
    );
};

export default MyReviews;