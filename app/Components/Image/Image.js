import React, {Component} from 'react';

export default class Image extends Component {
    constructor({
        src = '',
        className = '',
        lazyClassName = 'lazy',
        lazyLoadClassName = 'lazy__loaded',
        onLoad = () => {}
    }) {
        super();
        this.state = {
            src,
            classes: [].concat(className.split(' ')),
            lazyLoadClassName,
            onLoad,
            loaded: false
        }
        this.handleImageOnLoad = this.handleImageOnLoad.bind(this);
        this.handleImageLoadError = this.handleImageLoadError.bind(this);
    }

    handleImageOnLoad() {
        let classes = this.state.classes.splice(0);
        this.setState({
            classes,
            loaded: true
        });
        this.state.onLoad();
    }

    componentWillReceiveProps({ src }) {
        this.setState({ src })
    }

    handleImageLoadError() {
        console.warn('Could not load ' + this.state.src);
    }

    render() {
        return <span className={`lazy ${this.state.loaded ? this.state.lazyLoadClassName : ''}`}><img 
            className={this.state.classes.join(' ')}
            src={this.state.src}
            onLoad={this.handleImageOnLoad}
            onError={this.handleImageLoadError} /></span>;
    }
}
