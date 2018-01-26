import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo/logo.js';
import Slider from 'jgb-slider';
import ProjectService from '../../Services/ProjectService.js';
import Image from '../../Components/Image/Image.js';
import Navigation from '../../Components/Navigation/index.js';

/**
 * Returns an array with arrays of the given size.
 *
 * @param myArray {Array} array to split
 * @param chunk_size {Integer} Size of every group
 */
function chunkArray(myArray, chunk_size){
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];
    let myChunk;

    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        tempArray.push(myChunk);
    }

    return tempArray;
}

class ProjectsRoute extends Component {
    constructor(props) {
        super(props);

        this.repository = new ProjectService;
        this.state = {}
        this.state.work = [];
        this.repository.all()
            .then((res) => {
                let work = res.items.reduce((current, next) => {
                    current.push({
                        title: next.fields.heroTitle,
                        description: next.fields.projectInfo,
                        client: next.fields.clientName,
                        image: next.fields.heroImage.fields.file.url,
                        slug: next.fields.projectSlug
                    });
                    return current;
                }, []);

                console.log(work);
                this.setState({work: chunkArray(work, 3)})
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
           <Navigation></Navigation>

           <div className="home-slider">
              <ol className="home-slider__slider" style={{width: this.state.work.length * 100 + '%'}}>

                {this.state.work.map((slide, index) => {
                    return <li key={index} className="home-slider__slide">
                        <div className="projects">
                            {slide.map((item, index) => {

                            return <div key={index} className="projects__item">
                                    <div className="project" onClick={this.goTo.bind(this, item.slug)}>
                                        <Image 
                                            className="project__image"
                                            lazyClassName=""
                                            lazyLoadClassName="loaded"
                                            src={item.image} />                                                
                        
                                        <h2 className="project__title">
                                            {item.title}
                                        </h2>

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
