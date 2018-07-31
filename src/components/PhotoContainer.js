import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) => {

    const results = props.data;
    console.log(results);
    let photos;
  
    if (results.length > 0) {
        photos = results.map(photo =>
          <Photo  url={`https://farm5.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
                  key={photo.id} 
                  title={photo.title}
          />
        )
      } else {
        photos = <NotFound />
      }

    return (
        <div className="photo-container">
          {
              (props.loading) 
              ? <p>Now Loading...</p> 
              :
                <div>
                  <h2>Results</h2>
                  <ul>
                    {photos}
                  </ul>
                </div>
          }

        </div>
    );
};

export default PhotoContainer;