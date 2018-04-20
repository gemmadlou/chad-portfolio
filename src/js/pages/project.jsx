import React from 'react';
import ReactDOM from 'react-dom';

const getProject = (projects, id) => projects.find(project => project.id === id);

export const Project = ({routeParams, data}) => {
    let project = getProject(data.projects, routeParams.project);
    
    if (!project) {
        return <div>loading...</div>;
    }
    return <div className="h-100 overflow-y-auto overflow-x-hidden roboto">

        <div
            className="h-100 w-100 relative overflow-hidden">
            <div  
                className="fixed top-0 left-0 right-0 bottom-0 cover bg-top zoom-in anm-duration-3 anm-fm-forwards wc-transform" 
                style={{backgroundImage: `url(${project.image})`, 'z-index': '-1' }}>
                </div>
            
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black fade-out anm-duration-3 anm-fm-forwards"></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black-20"></div>
            <div className="white-90 sans-serif relative dt f3 w-100 h-100 ttu">
                <div className="dtc tc v-mid fade-in anm-duration-3 anm-fm-forwards">
                    <span className="pa3 db mb4 fw8 ls4">{project.client}</span>
                </div>
            </div>
        </div>

        <div className="min-h-100-m relative bg-near-white">
            <div className="fl-m h-50 relative left-0 top-0 absolute-m w-60-m w-two-thirds-l h-100-m">
                <img 
                    className="of-cover absolute top-0 left-0 h-100 w-100" 
                    src={project.heroImage} />
            </div>
            <div className="fr-m f5 relative m-50-m pa3 pa4-m pl5-l pr5-l w-40-m w-third-l">
                <h1>{project.blurbHeading}</h1>

                <div className="s-body-copy" dangerouslySetInnerHTML={{ __html: project.blurb}}></div>
            </div>
        </div>

        <div className="h-100 relative bg-white">
            <div className="roboto relative dt f3 w-100 h-100 ttu">
                <div className="dtc tc v-mid">
                    <span className="pa2 db fw8 ls4">
                        {project.quote}
                    </span>
                </div>
            </div>
        </div>

        <ul className="relative dg gac-1 gar-1 gac-2-ns gtc-2-ns gtr-2-ns gar-2-ns gtc-3-m gtr-2-m gar-2-m gac-3-m min-h-100">
            {project.gallery.map((image, index) => {
                return <li key={index} className="relative">
                    <img 
                        className="of-cover absolute-ns top-0 left-0 h-100 w-100" 
                        src={image} />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black-20"></div>
                </li>
            })}
        </ul>
        <div className="h-100 w-100 cb relative overflow-hidden">
            <div  
                className="absolute top-0 left-0 right-0 bottom-0 cover bg-top bga-fixed" 
                style={{backgroundImage: `url(${project.footerImage})` }}>
                </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black-40"></div>
            <div className=" white-90 sans-serif relative dt f3 w-100 h-100 ttu">
                <div className="dtc tc v-mid">
                    <span className="mb4 fw8 ls4">
                        {project.footerQuote}
                    </span>
                </div>
            </div>
        </div>

    </div>
}