import './Header.styl';

import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>Hello, world!!!!</h1>
                <p>Wellcome to Dotnet Core World!</p>
                <p>Wellcome to Dotnet Core World!</p>
                <p>Wellcome to Dotnet Core World!</p>
                <p>Wellcome to Dotnet Core World!</p>
            </div>
        );
    }
}

export default Header;