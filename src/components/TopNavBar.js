import React, { Component } from 'react'
import logo from '../assets/nba-logoman-word-white.svg';

export class TopNavBar extends Component {
    render () {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/*<h1 className="App-title">Welcome to React</h1>*/}
            </header>
        );
    }
}