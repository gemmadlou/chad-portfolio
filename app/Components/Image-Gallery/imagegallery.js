import React from 'react';

export default function ({ images = []}) {
    if (images.length === 0) {
      return null;
    }

    return <div className="image-gallery">
      <div className="image-gallery__inner">
        {images.map((image, index) => {
          return (
            <div key={index} className="image-gallery__item">
              <div className="aspect-ratio">
                <img className="image-gallery__image" src={image} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
}