import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './Banner.css';

import img1 from '../../../assets/banner/img1.jpg';
import img2 from '../../../assets/banner/img2.jpg';
import img3 from '../../../assets/banner/img3.jpg';
const bannerImages = [img1, img2, img3];

const Banner = () => {
    return (
        <div className="carousel w-full my-10">
            {
                bannerImages.map((img, index) =>
                    <div id={index} className="carousel-item relative w-full " key={index}>
                        <div className='banner-img-overlay w-full'>
                            <img src={img} className="w-full h-[80vh] lg:h-[600px] lg:rounded-xl object-cover" alt="" />
                        </div>

                        <div className="absolute flex justify-end items-center h-full px-5 md:left-20">
                            <div>
                                <h1 className='text-4xl md:text-6xl leading-10 lg:leading-[70px] text-white font-bold'>
                                    Take your
                                    <br />
                                    Business
                                    <br />
                                    Next level
                                </h1>
                                <p className='text-white md:text-lg max-w-md my-7'>Need new content for social media? Or level up your marketing game to capture your ideal client's attention?</p>
                                <div className='text-white flex flex-row flex-wrap gap-4'>
                                    <a href='#homeServiceSection'>
                                        <button className='btn bg-transparent border-white rounded-md capitalize'>Explore Services</button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href={`#${index > 0 ? index - 1 : bannerImages.length - 1}`} className="btn btn-circle  border-0" >
                                <FaArrowLeft />
                            </a>
                            <a href={`#${index > bannerImages.length - 2 ? 0 : index + 1}`} className="btn btn-circle  border-0">
                                <FaArrowRight />
                            </a>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Banner;