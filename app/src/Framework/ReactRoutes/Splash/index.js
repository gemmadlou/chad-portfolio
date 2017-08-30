import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo/logo.js';


class SplashRoute extends Component {

    componentDidMount() {
      this.timeoutHandle = setTimeout(()=>{
      window.location.pathname = '/projects';
      }, 5000);
    }
    componentWillUnmount(){
      // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
     clearTimeout(this.timeoutHandle);
    }
    render() {
         return (
          <div className="splash">
            <Logo></Logo>
              <div className="splash__position">
                <div className="splash__baseline">
                    <div className="splash__welcome">
                        Welcome to our
                    </div>
                </div>
              <div className="splash__baseline">
                  <div className="splash__welcome">
                        page!
                  </div>
              </div>
            </div>
          </div>
        );
    }
}

export default SplashRoute;
