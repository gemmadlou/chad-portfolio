import React, { Component } from 'react';
import Hero from '../../Components/Hero/hero.js';
import ImageGallery from '../../Components/Image-Gallery/imagegallery.js';
import Slider from 'jgb-slider';

class Project extends Component {
    
    constructor(props) {
        super(props);
        this.state = {}
        this.state.slider = {
          text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur',
          images: [
            {
              src: 'http://unsplash.it/1200/500?image=123'
            },
            {
              src: 'http://unsplash.it/1200/500?image=123'
            },
            {
              src: 'http://unsplash.it/1200/500?image=123'
            },
            {
              src: 'http://unsplash.it/1200/500?image=123'
            },
            {
              src: 'http://unsplash.it/1200/500?image=123'
            }
          ]
        }
    }
    
    componentDidMount() {
      new Slider({ selector: '.slider' });
    }
    
    shouldComponentUpdate() {
      return false;
    }
  
    render() {
      return (
        <div>
  
          <Hero></Hero>
  
          <div className="prj-summary">
            <div className="prj-summary__lead">
              <span className="prj-summary__lead-text">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
              </span>
            </div>
            <ul className="prj-summary__meta">
              <li className="prj-summary__meta-item">
                <h2 className="prj-summary__meta-title">Awards & Titles</h2>
                <p className="prj-summary__meta-text">ABC, EFG, LMNOP</p>
              </li>
  
              <li className="prj-summary__meta-item">
                <h2 className="prj-summary__meta-title">Shoutouts</h2>
                <p className="prj-summary__meta-text">Tom, John and Luke</p>
              </li>
  
              <li className="prj-summary__meta-item">
                <h2 className="prj-summary__meta-title">Visit Client</h2>
                <p className="prj-summary__meta-text">www.abc.com</p>
              </li>
            </ul>
          </div>
  
          <div className="prj-minimal-info">
            <div className="prj-minimal-info__text">
              <div className="prj-minimal-info__text-title">
                  Contextual
              </div>
              <div className="prj-minimal-info__text-content">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
              </div>
            </div>
            <div className="prj-minimal-info__main-image-wrapper">
              <img className="prj-minimal-info__image" src="http://placehold.it/800x800" />
            </div>
            <div className="prj-minimal-info__small-image-wrapper">
              <img className="prj-minimal-info__image" src="http://placehold.it/800x800" />
            </div>
          </div>
  
          <div className="prj-typography" style={{display: 'none'}}>
            <div className="prj-typography__item">
              <h3 className="prj-typography__item-header">
                Heading
              </h3>
              <span className="prj-typography__item-sub-header">
                Roboto
              </span>
              <div className="prj-typography__item-example">
                Image goes here
              </div>
            </div>
            <div className="prj-typography__item">
              <h3 className="prj-typography__item-header">
                Heading
              </h3>
              <span className="prj-typography__item-sub-header">
                Roboto
              </span>
              <div className="prj-typography__item-example">
                Image goes here
              </div>
            </div>
            <div className="prj-typography__item">
              <h3 className="prj-typography__item-header">
                Heading
              </h3>
              <span className="prj-typography__item-sub-header">
                Roboto
              </span>
              <div className="prj-typography__item-example">
                Image goes here
              </div>
            </div>
          </div>
  
          <div className="palette-section" style={{display: 'none'}}>
            <div className="palette-section__blurb">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
            <div className="palette-section__color-board">
              <ul className="color-board">
                <li className="color-board__item">
                  <span className="color-board__item-name">Super green</span>
                  <span className="color-board__item-color">#123131</span>
                </li>
                <li className="color-board__item">
                  <span className="color-board__item-name">Super green</span>
                  <span className="color-board__item-color">#123131</span>
                </li>
                <li className="color-board__item">
                  <span className="color-board__item-name">Super green</span>
                  <span className="color-board__item-color">#123131</span>
                </li>
                <li className="color-board__item">
                  <span className="color-board__item-name">Super green</span>
                  <span className="color-board__item-color">#123131</span>
                </li>
                <li className="color-board__item">
                  <span className="color-board__item-name">Super green</span>
                  <span className="color-board__item-color">#123131</span>
                </li>
                <li className="color-board__item">
                  <span className="color-board__item-name">Super green</span>
                  <span className="color-board__item-color">#123131</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="prj-dual-hero">
            <div className="prj-dual-hero__image-wrapper">
              <img className="prj-dual-hero__image" src="https://placeimg.com/1000/1000/arch" />
            </div>
            <div className="prj-dual-hero__image-wrapper">
              <img className="prj-dual-hero__image" src="https://placeimg.com/1000/1000/arch" />
            </div>
          </div>
  
          <Hero></Hero>
  
          <div className="prj-minimal-info">
            <div className="prj-minimal-info__text">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
            </div>
            <div className="prj-minimal-info__main-image-wrapper">
              <img className="prj-minimal-info__image" src="https://placeimg.com/1000/1000/arch" />
            </div>
            <div className="prj-minimal-info__small-image-wrapper">
              <img className="prj-minimal-info__image" src="https://placeimg.com/1000/1000/arch" />
            </div>
          </div>
  
          <ImageGallery style={{display: 'none'}}></ImageGallery>
          
          <div className="prj-slider">
            <div className="prj-slider__blurb">
              {this.state.slider.text}
            </div>
            <div className="prj-slider__slide">
              <div className="slider">
                <ol className="slider__slider">
                
                  {this.state.slider.images.map((img, key) => {
                    return  <li key={key} className="slider__slide">
                        <img src={img.src} />
                    </li>
                  })}
                </ol>
              </div>
            </div>
          </div>
  
          <Hero></Hero>
        </div>
      );
    }
}

export default Project;
