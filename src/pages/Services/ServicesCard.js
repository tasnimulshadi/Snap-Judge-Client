import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import ReactPhotoView from '../../components/react-photo-view/ReactPhotoView';

const ServicesCard = ({ service }) => {
    const { _id, title, rating, img, description } = service;

    return (
        <div className="card border-2 border-gray-100 shadow-lg rounded-lg">
            <figure className="p-5">
                {/*  react-photo-view */}
                <ReactPhotoView img={img} />
            </figure>
            <div className="card-body p-5 pt-0">
                <h2 className="font-bold text-2xl">{title}</h2>
                <h2 className="text-lg">{description.length > 100 ? description.slice(0, 100) + '...' : description}</h2>
                <div className="flex justify-between items-center">
                    <p className='font-semibold text-xl flex items-center'>Rating: <span className='text-amber-400 flex  items-center ml-2'>{rating} <FaStar /></span></p>
                    <Link to={`/service/${_id}`}>
                        <button className="btn border-0  text-xl hover:text-white capitalize">Check now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
