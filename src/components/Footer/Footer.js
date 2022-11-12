import React from 'react';
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="bg-slate-700 mt-10">
            <div className='footer container mx-auto max-w-7xl items-center p-6 text-neutral-content'>
                <div className="items-center grid-flow-col mx-auto sm:mx-0">
                    <p>SnapJudge | Copyright © 2022 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-xl mx-auto sm:mx-0">
                    <Link><FaFacebookF /></Link>
                    <Link><FaYoutube /></Link>
                    <Link><FaTwitter /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;