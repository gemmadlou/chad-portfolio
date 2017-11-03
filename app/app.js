import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from 'react-router-dom';

import ScrollToTop from './Components/ScrollToTop';
import SplashRoute from './Pages/Splash';
import ProjectsRoute from './Pages/Home';
import Project from './Pages/Project/project.js';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import Navigation from './Components/Navigation';

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
