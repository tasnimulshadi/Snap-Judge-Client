import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import MyReviewsList from './MyReviewsList';
import toast from 'react-hot-toast';
import useDocumentTitle from '../../utilities/useDocumentTitle';
import Pagination from '../../components/Pagination/Pagination';



const MyReviews = () => {
    useDocumentTitle("My Reviews");
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    //pagination
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);
    const limit = 3;


    //call api
    //get all reviews by user id
    useEffect(() => {
        fetch(`http://localhost:5000/reviewsbyuser?id=${user.uid}&limit=${limit}&index=${index}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data.reviews);
                setCount(data.count);
            });
    }, [user, index]);


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
                    My Reviews: {count}
                </h3>
            </div>
            <div>
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

export default MyReviews;