import {createStore} from 'redux';

let state 
    = (
        state = {
            projects: []
        }, 
        action = {
           type
        }
    ) => {
        let clone = Object.assign({}, state);
        switch(action.type) {
            case 'SET_PROJECTS':
                
                break;
        }

        clone.projects = [
            {
                image: 'http://unsplash.it/1000/1000?image=324',
                client: 'Jawbone'
            },
            {
                image: 'http://unsplash.it/1000/1000?image=326',
                client: 'Sommer and Rockson'
            },
            {
                image: 'http://unsplash.it/1000/1000?image=364',
                client: 'Puma'
            },
            {
                image: 'http://unsplash.it/1000/1000?image=356',
                client: 'Brodie'
            },
            {
                image: 'http://unsplash.it/1000/1000?image=94',
                client: 'Kafta & Co'
            },
            {
                image: 'http://unsplash.it/1000/1000?image=104',
                client: 'Sing Together Films'
            }
        ];

        return clone;
    }

export const store = createStore(state);