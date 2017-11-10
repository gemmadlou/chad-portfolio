import React from 'react';
import WhenInView from '../../Components/WhenInView/WhenInView.js';

export default function ({title, blurb, smallImage, largeImage}) {

    return <div className="prj-minimal-info">
    <div className="prj-minimal-info__text">
      <WhenInView>
        <div className="prj-minimal-info__text-title">
            {title}
        </div>
        <div className="prj-minimal-info__text-content">
            {blurb}
        </div>
      </WhenInView>
    </div>
    <div className="prj-minimal-info__main-image-wrapper">
      <img className="prj-minimal-info__image" src={largeImage} />
    </div>
    <div className="prj-minimal-info__small-image-wrapper">
      <img className="prj-minimal-info__image" src={smallImage} />
    </div>
  </div>
}