import React, {Component} from 'react';

export default function Hero({image, title}) {
    let _image = image || "http://placehold.it/1000x1000";
    let _title = title || "Hero title goes here";
    
    return <div className="hero">
            <img className="hero__image" src={_image} />
            <h1 className="hero__title">{_title}</h1>
        </div>;
}
