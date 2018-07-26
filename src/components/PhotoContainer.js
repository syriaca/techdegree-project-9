import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const Gallery = props => {
    return (
        <div className='gallery'>
            <Photo />
            <NotFound />
        </div>
    );
};

export default Gallery;