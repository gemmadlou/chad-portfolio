import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from 'react-router-dom';

import ScrollToTop from './src/Framework/Components/ScrollToTop';
import SplashRoute from './src/Framework/ReactRoutes/Splash';
import ProjectsRoute from './src/Framework/ReactRoutes/Home';
import Project from './src/Framework/ReactRoutes/Projects/project.js';
import AboutPage from './src/Framework/ReactRoutes/About';
import ContactPage from './src/Framework/ReactRoutes/Contact';

import Navigation from './src/Framework/Components/Navigation';

class App extends Component {

  render() {

    return (
      <Router history={browserHistory}>
        <ScrollToTop>
          <div className="page">



            <Navigation></Navigation>
            <Route exact path="/" component={SplashRoute}/>
            <Route path="/projects" component={ProjectsRoute}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/project/:id" component={Project}/>

          </div>
        </ScrollToTop>
      </Router>
    )

  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
