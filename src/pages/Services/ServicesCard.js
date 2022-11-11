import React from 'react';
import { Link } from 'react-router-dom';
import ReactPhotoView from '../../components/react-photo-view/ReactPhotoView';
import RatingStar from '../../components/RatingStar/RatingStar';

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
                <div className="flex justify-between items-center mt-5">
                    <RatingStar rating={rating}></RatingStar>
                    <Link to={`/services/${_id}`}>
                        <button className="btn border-0  text-xl hover:text-white capitalize">Check now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
