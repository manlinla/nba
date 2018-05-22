import React, { Component } from 'react';
import { Profile } from "./Profile";

export class Main extends Component {
    render() {
        return (
            <div className="main">
                <Profile/>
                <div className="profile">profile</div>
                <div className="shotchart">shotchart</div>
                <div className="clear"></div>
            </div>
        );
    }
}