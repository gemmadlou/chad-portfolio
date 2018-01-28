import React, { Component } from 'react';
import Hero from '../../Components/Hero/hero.js';
import Logo from '../../Components/Logo/logo.js';
import Image from '../../Components/Image/Image.js';
import ImageGallery from '../../Components/Image-Gallery/imagegallery.js';
import Slider from 'jgb-slider';
import WhenInView from '../../Components/WhenInView/WhenInView.js';
import MultiBoard from '../../Components/MultiBoard/multi-board.js';
import ProjectService from '../../Services/ProjectService.js';
import Navigation from '../../Components/Navigation/index.js';

class Project extends Component {
    
    constructor(props) {
        super(props);
        this.repository = new ProjectService;
        this.state = {
          finalWords: {},
          hero: {},
          introduction: null,
          gallery: [],
          multiboard: undefined,
          duoImages: [],
          slider: undefined
        }
    }
    
    componentDidMount() {
      this.repository.getBySlug(this.props.match.params.id)
        .then(model => {
          this.setState(model)
        });
    }
  
    render() {

      return (
        <div>

          <Logo />
          <Navigation />

          <Hero 
            image={this.state.hero.image}
            title={this.state.hero.title}>
          </Hero>

          {(() => {
            if (!this.state.introduction) {
              return null;
            }
            return (
            <div className="prj-summary">
              <div className="prj-summary__lead">
                  <span className="prj-summary__lead-text">
                    <WhenInView>
                      {this.state.introduction.blurb}
                    </WhenInView>
                  </span>
              </div>
              <ul className="prj-summary__meta">
                <WhenInView>
                  {this.state.introduction.meta.map((meta, index) => {
                    return (
                      <li key={index} className="prj-summary__meta-item">
                        <h2 className="prj-summary__meta-title">{meta.title}</h2>
                        <p className="prj-summary__meta-text">{meta.value}</p>
                      </li>
                    );
                  })}
                </WhenInView>
              </ul>
            </div>
            );
          })()}

          {(() => {
            if (!this.state.multiboard) {
              return;
            }
            return (
              <MultiBoard
                title={this.state.multiboard.title}
                blurb={this.state.multiboard.blurb}
                smallImage={this.state.multiboard.smallImage}
                largeImage={this.state.multiboard.largeImage}></MultiBoard>
            );
          })()}

          {(() => {
            if (this.state.duoImages.length !== 2)  {
              return;
            }
            return (<div className="prj-dual-hero">
                <div className="prj-dual-hero__image-wrapper">
                  <Image
                    className="prj-dual-hero__image"
                    lazyLoadClassName="loaded"
                    src={this.state.duoImages[0]}
                  />
                </div>
                <div className="prj-dual-hero__image-wrapper">
                  <Image
                    className="prj-dual-hero__image"
                    lazyLoadClassName="loaded"
                    src={this.state.duoImages[1]}
                  />
                </div>
              </div>
            );
          })()}
  
          <ImageGallery 
            images={this.state.gallery}
          ></ImageGallery>

          {(() => {
            if (!this.state.finalWords) {
              return;
            }
            return (
            <div className="prj-image-summary">
              <div className="prj-image-summary__lead">
                  <span className="prj-image-summary__lead-text">
                    <WhenInView>
                      {this.state.finalWords.text}
                    </WhenInView>
                  </span>
              </div>
              <div className="prj-image-summary__image-holder">
                <Image
                  className="prj-image-summary__image"
                  lazyLoadClassName="loaded"
                  src={this.state.finalWords.image} />
              </div>
            </div>
            );
          })()}
          
          {(() => {
            if (!this.state.slider) {
              return null;
            }
            return (<div className="prj-slider">
              <div className="prj-slider__blurb">
                <WhenInView>
                  {this.state.slider.text}
                </WhenInView>
              </div>
              <div className="prj-slider__slide">
                <div className="slider">
                  <ol className="slider__slider">
                  
                    {this.state.slider.slides.map((img, key) => {
                      return  <li key={key} className="slider__slide">
                          <img src={img} />
                      </li>
                    })}
                  </ol>
                </div>
              </div>
            </div>
              );
          })()}
        </div>
      );
    }
}

export default Project;
