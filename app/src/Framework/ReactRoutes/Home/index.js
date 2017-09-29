import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo/logo.js';
import Slider from 'jgb-slider';



class ProjectsRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            work: [
              [
                {
                    title: 'First Project',
                    description: 'The best food places in Barcelona were in Borne',
                    client: 'Kapacucca',
                    image: 'https://unsplash.it/1000/1000?image=889'
                },
                {
                    title: 'The End of Year Convention',
                    description: 'A little mini description describing the project',
                    client: 'Client name',
                    image: 'https://unsplash.it/1000/1000?image=891'
                },
                {
                    title: 'Work Item',
                    description: 'A little mini description describing the project',
                    client: 'Client name',
                    image: 'https://unsplash.it/1000/1000?image=892'
                },

              ],
              [
                 {
                    title: 'The End of Year Convention',
                    description: 'A little mini description describing the project',
                    client: 'Client name',
                    image: 'http://unsplash.it/1000/1000'
                },
                {
                    title: 'First Project',
                    description: 'The best food places in Barcelona were in Borne',
                    client: 'Kapacucca',
                    image: 'http://placehold.it/1000x1000'
                },
                 {
                    title: 'The End of Year Convention',
                    description: 'A little mini description describing the project',
                    client: 'Client name',
                    image: 'http://unsplash.it/1000/1000'
                },
              ],
              [
                  {
                    title: 'Work Item',
                    description: 'A little mini description describing the project',
                    client: 'Client name',
                    image: 'http://placehold.it/1000x1000'
                },
                {
                    title: 'The End of Year Convention',
                    description: 'A little mini description describing the project',
                    client: 'Client name',
                    image: 'http://unsplash.it/1000/1000'
                },
                {
                    title: 'Work Item',
                    description: 'A little mini description describing the project',
                    client: 'Client name',
                    image: 'http://placehold.it/1000x1000'
                },
              ],
              [
                 {
                    title: 'The End of Year Convention',
                    description: 'A little mini description describing the project',
                    client: 'Client name',
                    image: 'http://unsplash.it/1000/1000'
                },
                {
                    title: 'First Project',
                    description: 'The best food places in Barcelona were in Borne',
                    client: 'Kapacucca',
                    image: 'http://placehold.it/1000x1000'
                },
                 {
                    title: 'The End of Year Convention',
                    description: 'A little mini description describing the project',
                    client: 'Client name',
                    image: 'http://unsplash.it/1000/1000'
                }
              ]
            ]
        }
    }

    componentDidMount() {
        Slider({
            'selector': '.home-slider'
        });
    }

    goTo(page) {
        window.location.href = "/project/" + page;
    }

    render() {
         return (<div>

           <Logo></Logo>

           <div className="home-slider">
              <ol className="home-slider__slider" style={{width: this.state.work.length * 100 + '%'}}>

                {this.state.work.map((slide, index) => {
                    return <li key={index} className="home-slider__slide">
                                <div className="projects">
                                    {slide.map((item, index) => {

                                    return <div key={index} className="projects__item">

                                            <div className="project" onClick={this.goTo.bind(this, index)}>

                                                <img className="project__image" src={item.image} />
                                                <h2 className="project__title">
                                                    {item.title}
                                                </h2>
                                                <div className="project__bassline">
                                                    <div className="project__blurb">
                                                        {item.description}
                                                    </div>
                                                </div>
                                                <span className="project__subtitle">
                                                    {item.client}
                                                </span>
                                            </div>
                                        </div>
                        
                                    })}

                                </div>
                            </li>
                })}
            </ol>
        </div>
    </div>   );
    }
}

export default ProjectsRoute;
