import {createStore} from 'redux';
import marked from 'marked';
import sanitizeHTML from 'sanitize-html';

const get = (p, o) =>
  p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)

const asMarkdown = input => {
    return !input ? input : marked(sanitizeHTML(input));
}

let state 
    = (
        state = {
            projects: [],
            pages: []
        }, 
        action = {
           type,
           projects,
           pages
        }
    ) => {
        let clone = Object.assign({}, state);

        switch(action.type) {
            case 'SET_PROJECTS':
            console.log(action.projects)
                clone.projects = action.projects.items.map(item => ({
                    id: item.sys.id,
                    client: item.fields.client,
                    image: get(['fields', 'introImage', 'fields', 'file', 'url'], item),
                    blurbHeading: get(['fields', 'introHeading'], item),
                    blurb: asMarkdown(get(['fields', 'projectBlurb'], item)),
                    heroImage: get(['fields', 'heroImage', 'fields', 'file', 'url'], item),
                    quote: get(['fields', 'quote'], item),
                    gallery: get(['fields', 'gallery'], item) ? get(['fields', 'gallery'], item).map(image => {
                        return get(['fields', 'file', 'url'], image);
                    }) : [],
                    footerImage: get(['fields', 'footerImage', 'fields', 'file', 'url'], item),
                    footerQuote: get(['fields', 'footerQuote'], item)
                }));
                break;
            case 'SET_PAGES':
                console.log(action.pages)
                clone.pages = action.pages.items.map(item => ({
                    slug: item.fields.slug,
                    template: get(['fields', 'template', 'sys', 'contentType', 'sys', 'id'], item),
                    content: asMarkdown(get(['fields', 'template', 'fields', 'content'], item)),
                    image: get(['fields', 'template', 'fields', 'image', 'fields', 'file', 'url'], item)
                }));
                break;
        }

        console.log(clone, 'clone')

        return clone;
    }

export const store = createStore(state);