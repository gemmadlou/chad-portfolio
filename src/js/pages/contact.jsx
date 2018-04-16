import React from 'react';
import ReactDOM from 'react-dom';

export const Contact = () => {
    return <div className="h-100 overflow-y-auto roboto ">
        <div className="fl-m h-50 relative w-60-m w-two-thirds-l h-100-m">
            <img className="of-cover absolute top-0 left-0 h-100 w-100" src='http://unsplash.it/1000/1000' />
        </div>
        <div className="lh-copy f5 pa3 pa4-m pl5-l w-40-m w-third-l fl-m">
            <h1 className="fw6 f3 mb4">Get in contact</h1>

            <h3 className="fw6">Email</h3>
            <p className="mb4">hello@world.com</p>

            <h3 className="fw6">Phone</h3>
            <p className="mb4">01234 567 890</p>

            <h3 className="fw6">Address</h3>
            <p className="mb4">44 canvas street
                <br />Regan Road
                <br />EC1 4AD
            </p>
        </div>
    </div>;
}
