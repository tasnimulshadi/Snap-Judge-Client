import React from 'react';
import { FaStar } from "react-icons/fa";

const RatingStar = ({ rating }) => {
    return (
        <div className='flex text-amber-400'>
            {
                [...Array(parseInt(rating)).keys()].map(star => <FaStar key={star} />)
            }
        </div>
    );
};

export default RatingStar;