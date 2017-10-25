import React, {Component} from 'react';
import logo from '../images/logo.svg';

import Nav from './nav';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                <Nav />
            </header>
        )
    }
}

export default Header;