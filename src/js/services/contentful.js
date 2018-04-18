import {createClient} from 'contentful';

export const client 
    = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });

export const CONTENT_TYPE_ID 
    = {
        PROJET: 'project',
        PAGE: 'page'
    }

export const getProjects
    = () => {
        return client.getEntries({
            content_type: CONTENT_TYPE_ID.PROJET
        })
    }