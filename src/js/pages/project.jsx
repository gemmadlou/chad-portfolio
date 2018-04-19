import React from 'react';
import ReactDOM from 'react-dom';

const getProject = (projects, id) => projects.find(project => project.id === id);

export const Project = ({routeParams, data}) => {
    let project = getProject(data.projects, routeParams.project);
    console.log(project, '#');
    if (!project) {
        return <div>loading...</div>;
    }
    return <div className="h-100 overflow-y-auto roboto">

        <div 
            className="h-100 relative cover bga-fixed" 
            style={{backgroundImage: `url(${project.image})` }}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black-20"></div>
            <div className=" white-90 sans-serif relative dt f3 w-100 h-100 ttu">
                <div className="dtc tc v-mid">
                    <span className="mb4 fw8 ls4">{project.client}</span>
                </div>
            </div>
        </div>

        <div className="min-h-100 relative bg-light-gray">
            <div className="fl-m h-50 relative left-0 top-0 absolute-m w-60-m w-two-thirds-l h-100-m">
                <img 
                    className="of-cover absolute top-0 left-0 h-100 w-100" 
                    src={project.heroImage} />
            </div>
            <div className="lh-copy fr-m f5 relative m-50-m pa3 pa4-m pl5-l pr5-l w-40-m w-third-l">
                <h1>{project.blurbHeading}</h1>

                <div className="s-body-copy" dangerouslySetInnerHTML={{ __html: project.blurb}}></div>
            </div>
        </div>

        <div className="h-100 relative">
            <div className="black sans-serif relative dt f3 w-100 h-100 ttu">
                <div className="dtc tc v-mid">
                    <span className="ma4 fw8 ls4">
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
                </li>
            })}
        </ul>

        <div className="h-100 relative cover bga-fixed" style={{backgroundImage: `url(${project.footerImage})`}}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black-10"></div>
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