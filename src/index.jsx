import './style.css';
import Print from './print.jsx';
import Header from './Header.jsx';
import Home from './Home.jsx';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // required
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


function component() {
    var element = document.createElement('div');
    element.innerHTML = "Loading..."
    element.id = "main";
    return element;
}

document.body.appendChild(component());
RenderApp();

function RenderApp() {
    ReactDOM.render(
        <AppContainer>
            <Router>
                <div>
                    <div>
                        <Link to={`/`}>
                            header
                    </Link>
                        <Link to={`/home`}>
                            home
                    </Link>
                    </div>
                    <div>
                        <Route exact path="/" component={Header} />
                        <Route path="/home" component={Home} />
                    </div>
                </div>
            </Router>
        </AppContainer>,
        document.getElementById('main')
    );
}

if (module.hot) {
    module.hot.accept('./Header.jsx', function () {
        RenderApp();
    })
}