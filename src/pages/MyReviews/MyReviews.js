import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import MyReviewsList from './MyReviewsList';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    //get all reviews by user id
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/user/${user.uid}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, [user]);

    //delete a review by id
    const handleReviewDelete = (id) => {
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
                }
            });
    }

    return (
        <div>
            <div className='flex justify-between items-center mx-10'>
                <h3 className="text-center lg:my-5 text-2xl md:text-3xl lg:text-4xl  lg:leading-[60px] font-bold ">My Reviews: {reviews.length}</h3>
            </div>
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