import React from 'react';
import Photo from './Photo';

const Gallery = props => {
    return (
        <div className="photo-container">
          <h2>Results</h2>
            <ul>
                <Photo />
            </ul>
        </div>
    );
};

export default Gallery;