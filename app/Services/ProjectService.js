import {createClient} from 'contentful';
import config from '../../config.js'; 
import {mapper} from '../Mapper/project.js';

const client = createClient({
    space: config.CONTENTFUL_KEY,
    accessToken: config.CONTENTFUL_TOKEN
});

const contentType = 'projectPage';

export default class {
    all() {
        return client.getEntries({
            content_type: contentType,
            order: '-sys.createdAt'
        })
    }
    
    getBySlug(slug) {
        return client.getEntries({
            content_type: contentType,
            'fields.projectSlug': slug || 0,
            limit: 1
        })
        .then(res => {
            if (res.items.length === 0) {
                throw new Error('No page found with this slug');
            }
            return mapper(res);
        });
    }
}