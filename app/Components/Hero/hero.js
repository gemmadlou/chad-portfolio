import React, {Component} from 'react';

import WhenInView from '../WhenInView/WhenInView.js';

export default function Hero({image, title}) {

    if (!image) {
        return null;
    }
    
    return <div className="hero">
            <img className="hero__image" src={image} />
            <h1 className="hero__title">
                <WhenInView>
                {title}
                </WhenInView>
            </h1>
        </div>;
}
