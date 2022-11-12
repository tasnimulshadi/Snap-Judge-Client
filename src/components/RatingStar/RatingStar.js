import React from 'react';
import { FaStar } from "react-icons/fa";

// by providing a number as a rating prop this component will return that number of start horizontally
const RatingStar = ({ rating }) => {
    const ratingNumber = [...Array(parseInt(rating)).keys()] //number into Array of numbers

    return (
        <div className='flex text-amber-400'>
            {
                ratingNumber.map(star => <FaStar key={star} />)
            }
        </div>
    );
};

export default RatingStar;