import React, {Component} from 'react';
import {
  Link,
  history
} from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            menuClasses: []
        }
        
        this.toggleActive = this.toggleActive.bind(this);
    }
    
    componentDidMount() {
        this.toggleActive(false);
    }
    
    toggleActive = (isActive) => {
        let state = Object.assign({}, this.state);
        state.active = (isActive === true || isActive === false) ? isActive : !this.state.active;
        state.menuClasses = [
            'navigation__menu',
            (state.active) ? 'navigation__menu--active' : ''
        ];
        this.setState(state);
    }
    
    goTo(link) {
      window.location.pathname = link;
    }
    
    render() {
        return (<header className="navigation">
                <div className="navigation__hamburger" onClick={this.toggleActive}>
                  <div className="hamburger">
                    <div className="hamburger__bar"></div>
                  </div>
                </div>
                <div className={this.state.menuClasses.join(' ')}>
                  <ul className="menu">
                    <li className="menu__item">
                      <span className="menu__link" onClick={this.goTo.bind(this, '/projects')}>Projects</span>
                    </li>
                    <li className="menu__item">
                      <span className="menu__link" onClick={this.goTo.bind(this, '/about')}>About</span>
                    </li>
                    <li className="menu__item">
                      <span className="menu__link" onClick={this.goTo.bind(this, '/contact')}>Contact</span>
                    </li>
                  </ul>
                </div>
            </header>);
    }
}


export default Navigation;