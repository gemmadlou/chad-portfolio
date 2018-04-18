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

        // clone.projects = [
        //     {
        //         image: 'http://unsplash.it/1000/1000?image=324',
        //         client: 'Jawbone'
        //     },
        //     {
        //         image: 'http://unsplash.it/1000/1000?image=326',
        //         client: 'Sommer and Rockson'
        //     },
        //     {
        //         image: 'http://unsplash.it/1000/1000?image=364',
        //         client: 'Puma'
        //     },
        //     {
        //         image: 'http://unsplash.it/1000/1000?image=356',
        //         client: 'Brodie'
        //     },
        //     {
        //         image: 'http://unsplash.it/1000/1000?image=94',
        //         client: 'Kafta & Co'
        //     },
        //     {
        //         image: 'http://unsplash.it/1000/1000?image=104',
        //         client: 'Sing Together Films'
        //     }
        // ];

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