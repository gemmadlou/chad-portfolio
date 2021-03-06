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
                        image: next.fields.heroImagePortrait
                            ? next.fields.heroImagePortrait.fields.file.url
                            : next.fields.heroImage.fields.file.url,
                        imageLoaded: false,
                        slug: next.fields.projectSlug
                    });
                    return current;
                }, []);

                this.setState({work: chunkArray(work, 3)})
            });
    }

    componentDidMount() {
        Slider({
            'selector': '.home-slider'
        });
    }

    handleImageLoad(chunk, index) {
        let newstate = Object.assign({}, this.state);
        newstate.work[chunk][index].imageLoaded = true;
        this.setState(newstate);
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

                {this.state.work.map((slide, chunk) => {
                    return <li key={chunk} className="home-slider__slide">
                        <div className="projects">
                            {slide.map((item, index) => {

                            return <div key={index} className="projects__item">
                                    <div className={`project ${item.imageLoaded ? 'project--loaded' : ''}`} onClick={this.goTo.bind(this, item.slug)}>
                                        <Image 
                                            className="project__image"
                                            onLoad={this.handleImageLoad.bind(this, chunk, index)}
                                            src={item.image} />

                                        <span className="project__subtitle">
                                            {item.client}
                                        </span>

                                        <span className={`project__spinner`}></span>
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
