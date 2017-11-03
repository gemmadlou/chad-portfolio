import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo/logo.js';
import Slider from 'jgb-slider';
import ProjectService from '../../Services/ProjectService.js';


class ProjectsRoute extends Component {
    constructor(props) {
        super(props);

        this.repository = new ProjectService;
        this.state = {}
        this.state.work = [];
        this.repository.all()
            .then((res) => {
                let work = res.items.reduce((current, next) => {
                    current[0].push({
                        title: next.fields.title,
                        description: next.fields.shortBlurb,
                        client: next.fields.client,
                        image: res.includes.Asset.find((asset) => {
                            return next.fields.featuredImage.sys.id === asset.sys.id
                        }).fields.file.url,
                        slug: next.fields.slug
                    });
                    return current;
                }, [[]]);
                this.setState({work: work})
            });
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
                                            <div className="project" onClick={this.goTo.bind(this, item.slug)}>
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
