import React, { Component } from 'react';
import Hero from '../../Components/Hero/hero.js';
import Logo from '../../Components/Logo/logo.js';
import ImageGallery from '../../Components/Image-Gallery/imagegallery.js';
import Slider from 'jgb-slider';
import WhenInView from '../../Components/WhenInView/WhenInView.js';
import ProjectService from '../../Services/ProjectService.js';

class Project extends Component {
    
    constructor(props) {
        super(props);
        this.repository = new ProjectService;
        console.log(this.props);
        this.state = {
          title: '',
          introduction: '',
          imageURL: '',
          meta: []
        }
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


      this.repository.getBySlug(this.props.match.params.id)
      .then(res => {
        console.log(res);
        this.setState({ 
          title: res.item.fields.title,
          introduction: res.item.fields.introductionStatement,
          image: res.includes.Asset.find((asset) => {
              return res.item.fields.featuredImage.sys.id === asset.sys.id
          }).fields.file.url,
          meta: res.item.fields.projectMeta ?
            res.item.fields.projectMeta.map(meta => {
              return res.includes.Entry.find(include => include.sys.id === meta.sys.id)
            }).map(meta => {
              return {
                title: meta.fields.title,
                blurb: meta.fields.blurb
              }
            }) : []
        })
      });
    }
  
    render() {
      return (
        <div>
          <Logo></Logo>

          <Hero 
            image={this.state.image}
            title={this.state.title}></Hero>
  
          {(() => {
            if (!this.state.introduction || this.state.meta.length === 0) {
              return;
            }
            return (
            <div className="prj-summary">
              <div className="prj-summary__lead">
                
                  <span className="prj-summary__lead-text">
                    <WhenInView>
                      {this.state.introduction}
                    </WhenInView>
                  </span>
                
              </div>
              <ul className="prj-summary__meta">
                <WhenInView>
                  {this.state.meta.map((meta, index) => {
                    return (
                      <li key={index} className="prj-summary__meta-item">
                        <h2 className="prj-summary__meta-title">{meta.title}</h2>
                        <p className="prj-summary__meta-text">{meta.blurb}</p>
                      </li>
                    );
                  })}
                </WhenInView>
              </ul>
            </div>
            );
          })()}
          
  
          <div className="prj-minimal-info">
            <div className="prj-minimal-info__text">
              <WhenInView>
                <div className="prj-minimal-info__text-title">
                    Photography
                </div>
                <div className="prj-minimal-info__text-content">
                    Photos were taken over 3 nights in Treblinka to capture the essence of the Nero team.
                </div>
              </WhenInView>
            </div>
            <div className="prj-minimal-info__main-image-wrapper">
              <img className="prj-minimal-info__image" src="https://unsplash.it/1000/1000?image=903" />
            </div>
            <div className="prj-minimal-info__small-image-wrapper">
              <img className="prj-minimal-info__image" src="https://unsplash.it/1000/1000?image=901" />
            </div>
          </div>
          
          <div className="prj-dual-hero">
            <div className="prj-dual-hero__image-wrapper">
              <img className="prj-dual-hero__image" src="https://unsplash.it/1000/1000?image=907" />
            </div>
            <div className="prj-dual-hero__image-wrapper">
              <img className="prj-dual-hero__image" src="https://unsplash.it/1000/1000?image=911" />
            </div>
          </div>
  
          <Hero
            image="https://unsplash.it/1000/1000?image=96"
            title="Nero on timeout"></Hero>
  
          <div className="prj-minimal-info">
            <div className="prj-minimal-info__text">
              <WhenInView>
                Reconciling their brand with their culture and physical space proved a unique challenge
              </WhenInView>
            </div>
            <div className="prj-minimal-info__main-image-wrapper">
              <img className="prj-minimal-info__image" src="https://unsplash.it/1000/1000?image=946" />
            </div>
            <div className="prj-minimal-info__small-image-wrapper">
              <img className="prj-minimal-info__image" src="https://unsplash.it/1000/1000?image=945" />
            </div>
          </div>
  
          <ImageGallery></ImageGallery>
          
          <div className="prj-slider">
            <div className="prj-slider__blurb">
              <WhenInView>
              {this.state.slider.text}
              </WhenInView>
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
  
        </div>
      );
    }
}

export default Project;
