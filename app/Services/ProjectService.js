import {createClient} from 'contentful';
import config from '../../config.js'; 

const client = createClient({
    space: config.CONTENTFUL_KEY,
    accessToken: config.CONTENTFUL_TOKEN
});

export default class {
    all() {
        return client.getEntries({
            content_type: 'project',
            order: '-sys.createdAt'
        })
        .then((response) => {
            return Promise.resolve(response);
        })
        .catch((err) => {
            console.log(err);
            return Promise.resolve(err);
        })
    }
}