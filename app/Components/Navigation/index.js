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
            menuClasses: [],
            navigationClasses: []
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
        state.navigationClasses = [
          'navigation',
          (state.active) ? 'navigation--active' : ''
        ];
        this.setState(state);
    }
    
    goTo(link) {
      window.location.pathname = link;
    }
    
    render() {
        return (<header className={this.state.navigationClasses.join(' ')}>
                <div className="navigation__hamburger" onClick={this.toggleActive}>
                  <div className="hamburger">
                    <div className="hamburger__bar"></div>
                  </div>
                </div>
                <div className={this.state.menuClasses.join(' ')}>
                  <ul className="menu">
                    <li className="menu__item" onClick={this.goTo.bind(this, '/projects')}>
                      <span className="menu__item-title">
                        Projects
                      </span>
                      <span className="menu__item-description">
                        Some descriptory text lorem ipsum dolor sit amet consectetur et amen.
                      </span>
                    </li>
                    <li className="menu__item" onClick={this.goTo.bind(this, '/about')}>
                      <span className="menu__item-title">
                        About
                      </span>
                      <span className="menu__item-description">
                        Some descriptory text lorem ipsum dolor sit amet consectetur et amen.
                      </span>
                    </li>
                    <li className="menu__item" onClick={this.goTo.bind(this, '/contact')}>
                      <span className="menu__item-title">
                        Contact
                      </span>
                      <span className="menu__item-description">
                        Some descriptory text lorem ipsum dolor sit amet consectetur et amen.
                      </span>
                    </li>
                  </ul>
                </div>
            </header>);
    }
}


export default Navigation;