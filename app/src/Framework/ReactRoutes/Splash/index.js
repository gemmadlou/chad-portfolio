import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo/logo.js';


class SplashRoute extends Component {

    componentDidMount() {
      this.timeoutHandle = setTimeout(()=>{
        return (
           <Navigator
             renderScene={(route, navigator) =>
               <Home/>
             }
           />
       )
      }, 5000);
    }
    componentWillUnmount(){
     clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
}
    render() {
         return (<div>
         <CSSTransitionGroup
           transitionName="example"
           transitionAppear={true}
           transitionAppearTimeout={500}
           transitionEnterTimeout={500}
           transitionLeaveTimeout={300}>

           <div className="welcome">
           Welcome to our page!
           </div>



        </CSSTransitionGroup>
    </div>   );
    }
}

export default SplashRoute;
