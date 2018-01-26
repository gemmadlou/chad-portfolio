import React, {Component} from 'react';
import Image from '../Image/Image.js';

import WhenInView from '../WhenInView/WhenInView.js';

export default class Hero extends Component {
    constructor({
        image,
        title
    }) {
        super();
        this.state = {
            image,
            title
        }
    }

    componentWillReceiveProps({
        image,
        title
    }) {
        this.setState({
            image, 
            title
        })
    }

    render() {
        console.log(this.state);
        return <div className="hero">
                {!this.state.image ? (
                    <img 
                        className="hero__image" 
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" />
                ) : (
                    <Image 
                    className="hero__image"
                    lazyClassName=""
                    lazyLoadClassName="loaded"
                    src={this.state.image} />
                )}
                
                <h1 className="hero__title">
                    <WhenInView>
                    {this.state.title}
                    </WhenInView>
                </h1>
            </div>;
    }

}