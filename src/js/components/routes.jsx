import React from 'react';
import ReactDom from 'react-dom';
import Route from 'route-parser';
import {Project} from '../pages/project.jsx';
import {Four0Four} from '../pages/404.jsx';
import {Contact} from '../pages/contact.jsx';

let routes = [
    {
        router: new Route(''),
        component: <Project />
    },
    {
        router: new Route('contact'),
        component: <Contact />
    }
];

export const route = hashpart => {
    let hash = hashpart.replace('#', '');

    let found = routes.find(route => {
        return route.router.match(hash);
    });

    return !found ? <Four0Four /> : found.component;
}
