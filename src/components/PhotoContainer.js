import React from 'react';
import Photo from './Photo';

const Gallery = (props) => {

    const results = props.data;
    let photos;

    if (results.length > 0 ) {
        photos = results.map(photo =>
          <Photo url={`https://farm5.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} title={photo.title}/>
        )
      }

    return (
        <div className="photo-container">
          <h2>Results</h2>
            <ul>
               {photos}
            </ul>
        </div>
    );
};

export default Gallery;