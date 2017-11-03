import React, {Component} from 'react';

import WhenInView from '../WhenInView/WhenInView.js';

export default function Hero({image, title}) {

    let _image = image || "http://placehold.it/1000x1000";
    let _title = title || "";
    
    return <div className="hero">
            <img className="hero__image" src={_image} />
            <h1 className="hero__title">
                <WhenInView>
                {_title}
                </WhenInView>
            </h1>
        </div>;
}
