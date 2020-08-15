import React from 'react';
import logo from '../rtp_logo.JPG';

export default class ITTaskList extends React.Component
{
    render () {
        return (
            <div style={{display: "flex-box"}}>
                <img src={logo} className="App-logo" alt="logo" />           
                <h1>RTP - IT TaskList</h1>              
            </div>
        )
    }
}