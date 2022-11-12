import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

// this component works as a img tag. 
// when the image is clicked the image is shown in fuul screen with black background
// img prop is an img url
const ReactPhotoView = ({ img }) => {
    return (
        <PhotoProvider>
            <div className="w-full">
                <PhotoView src={img} alt="">
                    <img src={img} alt="" className="rounded-lg h-48 sm:h-64 md:h-48 w-full object-cover" />
                </PhotoView>
            </div>
        </PhotoProvider>
    );
}

export default ReactPhotoView;