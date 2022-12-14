import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useDocumentTitle from '../../utilities/useDocumentTitle';
import BlogArticle from './BlogArticle';


const Blog = () => {
    useDocumentTitle("Blog");
    const [blogs, setBlogs] = useState([]);

    //call blog get api
    useEffect(() => {
        fetch('https://ph-assignment-11-service-review-server-tasnimulshadi.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            });
    }, []);


    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {
                    blogs.map(article => <BlogArticle
                        key={article._id}
                        article={article}
                    ></BlogArticle>)
                }
            </div>
        </div>
    );
};

export default Blog;