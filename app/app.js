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

import ProjectsRoute from './src/Framework/ReactRoutes/Home';
import AboutPage from './src/Framework/ReactRoutes/About';
import ContactPage from './src/Framework/ReactRoutes/Contact';
import Project from './src/Framework/ReactRoutes/Home/project.js';
import Navigation from './src/Framework/Components/Navigation';

class App extends Component {

  render() {

    return (
      <Router history={browserHistory}>
        <ScrollToTop>
          <div className="page">

            <Link to="">
                <div className="logo">
                    logo
                </div>
            </Link>

            <Navigation></Navigation>

            <Route exact path="/" component={ProjectsRoute}/>
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
