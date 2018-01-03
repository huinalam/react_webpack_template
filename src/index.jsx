import './style.css';
import Print from './print.jsx';
import Header from './Header.jsx';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // required


function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = "hello!"
    element.id = "main";
    element.classList.add('hello');
    element.classList.add('hi');

    return element;
}

document.body.appendChild(component());
RenderHeader();

function RenderHeader() {
    ReactDOM.render(
        <AppContainer>
            <Header />
        </AppContainer>,
        document.getElementById('main')
    );
}

if (module.hot) {
    module.hot.accept('./Header.jsx', function () {
        RenderHeader();
    })
}