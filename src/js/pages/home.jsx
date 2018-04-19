import React from 'react';
import ReactDOM from 'react-dom';

const panels = projects => {
    return projects.map(({image, client, id}, index) => {
        return <li key={index} className="relative">
            <a href={`#project/${id}`} className="no-underline">
                <img className="of-cover absolute top-0 left-0 h-100 w-100" src={image} />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black-70"></div>
                <div className="roboto white-90 sans-serif relative dt f3 w-100 h-100 ttu">
                    <div className="dtc tc v-mid">
                        <div className="mb4 fw8 ls4">{client}</div>
                        <button className="dim ls4 bg-black white bw0 fw8 ttu pl5 pr5 pt3 pb3 f6">
                            Read
                        </button>
                    </div>
                </div>
            </a>
        </li>
    });
}

export const Home = ({ routeParams, data }) => {
    console.log('data', data);
    return <div className="h-100 overflow-y-auto">
        <ul className="relative dg gac-1 gar-1 gac-2-ns gtc-2-ns gtr-2-ns gar-2-ns gtc-3-m gtr-2-m gar-2-m gac-3-m h-100 min-h-100-ns">
            {panels(data.projects)}
        </ul>
</div>;
}