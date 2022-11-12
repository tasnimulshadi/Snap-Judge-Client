import React from 'react';
import { useState } from 'react';
import ReactPhotoView from '../../components/react-photo-view/ReactPhotoView';

const BlogArticle = ({ article }) => {
    const { img, title, details } = article;
    const [seeMore, setSeeMore] = useState(false);

    return (
        <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <div className='p-5'>
                {/*  react-photo-view */}
                <ReactPhotoView img={img} ></ReactPhotoView>
            </div>
            <div className="p-5 ">
                <p className="inline-block mb-3 text-2xl font-bold leading-5">
                    {title}
                </p>
                <p className="mb-2 text-gray-700">
                    {seeMore ? details : details.slice(0, 100) + '...'}
                </p>
                <button
                    onClick={() => setSeeMore(!seeMore)}
                    className="inline-flex items-center font-semibold text-blue-500"
                >
                    {seeMore ? 'See Less' : 'See More'}
                </button>
            </div>
        </div>
    );
};

export default BlogArticle;