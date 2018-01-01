import React from 'react';
import Logo from '../../Components/Logo/logo.js';
import Navigation from '../../Components/Navigation/index.js';

const ContactPage = (props) => {

    let meta = props.meta || [
        {
            heading: 'Email',
            text: 'hello@world.com'
        },
        {
            heading: 'Phone',
            text: '01234 567 890'
        },
        {
            heading: 'Address',
            text: '44 canvas street\nRegan Road\nEC1 4AD'
        }
    ];

    return (
        <div className="contact">
            <Logo />
            <Navigation />

            <div className="contact__image-holder">
                <img 
                    src="http://unsplash.it/1000/1000" 
                    className="contact__image" />
            </div>
            <div className="contact__content">
                <h1 className="contact__content-title">
                    Contact Page
                </h1>
                <ul className="list">
                    {meta.map((item, index) => {
                        return (<li key={index} className="list__item">
                            <p className="list__item-title">
                                {item.heading}
                            </p>
                            <p className="list__item-value">
                                {item.text}
                            </p>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ContactPage;