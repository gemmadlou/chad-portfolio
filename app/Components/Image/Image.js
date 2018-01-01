import React, {Component} from 'react';

export default class Image extends Component {
    constructor({
        src = '',
        className = '',
    }) {
        super();
        this.state = {
            src,
            classes: ['lazy'].concat(className.split(' '))
        }
        this.handleImageOnLoad = this.handleImageOnLoad.bind(this);
        this.handleImageLoadError = this.handleImageLoadError.bind(this);
    }

    handleImageOnLoad() {
        let classes = this.state.classes.splice(0);
        classes.push('lazy__loaded')
        this.setState({
            classes
        })
    }

    handleImageLoadError() {
        console.warn('Could not load ' + this.state.src);
    }

    render() {
        return <img 
            src={this.state.src}
            className={this.state.classes.join(' ')}
            onLoad={this.handleImageOnLoad}
            onError={this.handleImageLoadError} />;
    }
}
