import React, { Component } from 'react';
import Hero from '../../Components/Hero/hero.js';
import Logo from '../../Components/Logo/logo.js';
import ImageGallery from '../../Components/Image-Gallery/imagegallery.js';
import Slider from 'jgb-slider';
import WhenInView from '../../Components/WhenInView/WhenInView.js';
import MultiBoard from '../../Components/MultiBoard/multi-board.js';
import ProjectService from '../../Services/ProjectService.js';

class Project extends Component {
    
    constructor(props) {
        super(props);
        this.repository = new ProjectService;
        this.state = {
          title: '',
          introduction: '',
          imageURL: '',
          meta: [],
          gallery: [],
          heroImage: '',
          heroText: '',
          multiBoard: [],
          duoImage: []
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
        console.log(res.item.fields.dualImageModule);
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
            }) : [],
          gallery: res.item.fields.gallery ? 
            res.item.fields.gallery.map(image => {
              return image.fields.file.url;
            }) : [],
          heroImage: !res.item.fields.heroBlockImage
            ? ''
            : res.includes.Asset.find((asset) => {
                return res.item.fields.heroBlockImage.sys.id === asset.sys.id
            }).fields.file.url,
          heroText: res.item.fields.heroBlockText || '',
          multiBoard: !res.item.fields.multiBoard
            ? [] 
            : res.item.fields.multiBoard.map(board => {
              return {
                smallImage: board.fields.smallImage.fields.file.url,
                largeImage: board.fields.largeImage.fields.file.url,
                blurb: board.fields.blurb,
                title: ''
              }
            }),
          duoImage: Array.isArray(res.item.fields.dualImageModule) && res.item.fields.dualImageModule.length > 0
            ? res.item.fields.dualImageModule.map(image => {
              return image.fields.file.url;
            })
            : []
        })
      });
    }
  
    render() {
      return (
        <div>

          <Logo></Logo>

          <Hero 
            image={this.state.image}
            title={this.state.title}>
          </Hero>

          {(() => {
            if (!this.state.introduction || this.state.meta.length === 0) {
              return null;
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

          {(() => {
            if (this.state.multiBoard.length === 0) {
              return;
            }
            return (
              <MultiBoard
                title={this.state.multiBoard[0].title}
                blurb={this.state.multiBoard[0].blurb}
                smallImage={this.state.multiBoard[0].smallImage}
                largeImage={this.state.multiBoard[0].largeImage}></MultiBoard>
              
            );
          })()}

          {(() => {
            if (this.state.duoImage)  {
              return;
            }
            return (
              <div className="prj-dual-hero">
                <div className="prj-dual-hero__image-wrapper">
                  <img className="prj-dual-hero__image" src={this.state.duoImage[0]} />
                </div>
                <div className="prj-dual-hero__image-wrapper">
                  <img className="prj-dual-hero__image" src={this.state.duoImage[1]} />
                </div>
              </div>
            );
          })}
          
  
          <Hero
            image={this.state.heroImage}
            title={this.state.heroText}></Hero>
  
            {(() => {
              if (this.state.multiBoard.length < 2) {
                return;
              }
              return (
                <MultiBoard
                  title={this.state.multiBoard[1].title}
                  blurb={this.state.multiBoard[1].blurb}
                  smallImage={this.state.multiBoard[1].smallImage}
                  largeImage={this.state.multiBoard[1].largeImage}></MultiBoard>
                
              );
            })()}
  
          <ImageGallery 
            images={this.state.gallery}
          ></ImageGallery>
          
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
