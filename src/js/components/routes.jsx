import React from 'react';
import ReactDom from 'react-dom';
import Route from 'route-parser';
import {Home} from '../pages/home.jsx';
import {Four0Four} from '../pages/404.jsx';
import {Contact} from '../pages/contact.jsx';
import {About} from '../pages/about.jsx';
import {Project} from '../pages/project.jsx';

let routes = [
    {
        router: new Route(''),
        component: Home
    },
    {
        router: new Route('contact'),
        component: Contact
    },
    {
        router: new Route('about'),
        component: About
    },
    {
        router: new Route('project/:project'),
        component: Project
    }
];

export const route = (hashpart, data = {}) => {

    let hash = hashpart.replace('#', '');

    let found = routes.map(route => {
        route.match = route.router.match(hash);
        return route;  
    }).find(route => {
        return route.match;
    });

    return !found ? <Four0Four /> : <found.component routeParams={found.match} data={data} />;
}
