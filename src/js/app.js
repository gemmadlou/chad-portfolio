import domready from 'domready';
import React from 'react';
import ReactDOM from 'react-dom';
import {Project} from './pages/project.jsx';

domready(() => {
    ReactDOM.render(
        <Project/>,
        document.getElementById('app')
    );     
});