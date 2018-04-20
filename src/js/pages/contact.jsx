import React from 'react';
import ReactDOM from 'react-dom';

const getContactPage = pages => pages.find(page => page.slug === 'contact');

export const Contact = ({routeParams, data}) => {
    
    let page = getContactPage(data.pages);

    if (!page) {
        return <div>loading</div>;
    }

    return <div className="h-100 overflow-y-auto roboto ">
        <div className="fl-m h-50 overflow-hidden relative fixed-m w-60-m w-two-thirds-l h-100-m">
            <img 
                className="zoom-out anm-duration-3 of-cover absolute top-0 left-0 h-100 w-100" 
                src={page.image} />
        </div>
        <div 
            className="s-body-copy lh-copy fr-m f5 relative m-50-m pa3 pa4-m pl5-l w-40-m w-third-l"
            dangerouslySetInnerHTML={{__html: page.content}}>
        </div>
    </div>;
}
