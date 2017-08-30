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
                }
              ]
            ]
        }
    }

    componentDidMount() {
    	new Slider({ selector: '.prj-slider' });
    }

    render() {
         return (<div>
         <CSSTransitionGroup
           transitionName="example"
           transitionAppear={true}
           transitionAppearTimeout={500}
           transitionEnterTimeout={500}
           transitionLeaveTimeout={300}>

           <div className="prj-slider">
              <div className="prj-slider__slider">

           <Logo></Logo>

                {this.state.work.map((slide, index) => {
                    return <div key={index} className="prj-slider__slide">
                            <div className="projects">
                            	{slide.map((item, index) => {

                            	return <div key={index} className="projects__item">

                                <div className="project">

                                <img className="project__image" src={item.image} />
                                <h2 className="project__title">
                                    {item.title}
                                </h2>
                                  <div className="project__bassline">
                                    <div className="project__blurb">
                                        {item.description} {index}
                                    </div>
                                  </div>
                                <span className="project__subtitle">
                                    {item.client}
                                </span>
                                <Link to={`/project/${index}`} className="project__link"></Link>
                            </div>
                        </div>
                })}
                </div>

            </div>
            })}
            </div>
            </div>
        </CSSTransitionGroup>
    </div>   );
    }
}

export default ProjectsRoute;
