import {createClient} from 'contentful';
import config from '../../config.js'; 

const client = createClient({
    space: config.CONTENTFUL_KEY,
    accessToken: config.CONTENTFUL_TOKEN
});

let handleError = (err) => {
    console.warn(err);
    return Promise.resolve(err);
};

export default class {
    all() {
        return client.getEntries({
            content_type: 'project',
            order: '-sys.createdAt'
        })
        .catch(handleError);
    }

    getBySlug(slug) {
        return client.getEntries({
            content_type: 'project',
            'fields.slug': slug || 0,
            limit: 1
        })
        .then((res) => {
            if (res.items.length === 0) {
                throw new Error('No page found with this slug');
            }
            res.item = res.items[0];
            return Promise.resolve(res);
        })
        .catch(handleError);
    }
}