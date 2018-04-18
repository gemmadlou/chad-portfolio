import {createStore} from 'redux';

const get = (p, o) =>
  p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)

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
                    image: get(['fields', 'introImage', 'fields', 'file', 'url'], item)
                }));
                break;
        }

        return clone;
    }

export const store = createStore(state);