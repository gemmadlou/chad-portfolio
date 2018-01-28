import React from 'react';
import Image from '../Image/Image';

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
                <Image
                  src={image}
                  className="image-gallery__image"
                  lazyLoadClassName="loaded"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
}