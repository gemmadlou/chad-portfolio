import domready from 'domready';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App.jsx';

domready(() => {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );     
});