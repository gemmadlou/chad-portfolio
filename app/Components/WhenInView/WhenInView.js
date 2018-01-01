import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

export default class WhenInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inView: false,
            animationType: props.animationType || 'subtle'
        }

        this.onEnter = this.onEnter.bind(this);
    }

    onEnter() {
        this.setState({ inView: true });
    }

    render() {
        let classes = "animate animate__" + this.state.animationType;
            classes += this.state.inView ? " in" : "";
        return (<div className={classes}>
            <div><Waypoint onEnter={this.onEnter} /></div>
            {this.props.children}
        </div>);
    }
}