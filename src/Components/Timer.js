import React, { Component } from 'react'
import ReactCountdownClock from "react-countdown-clock"

export default class Timer extends Component {

    state = {
        pause : true
    }

    handleclick = () =>
    {
        document.getElementById('start').style.display = 'none';    
        let textarea = document.getElementById('totype');
        textarea.readOnly = false;
        document.getElementById('totype').focus();
        this.setState({pause : false})
    }

    completehandle = () =>
    {
        let change = document.getElementById('change');
        change.style.display = 'none';
        let textarea = document.getElementById('totype');
        textarea.value = '';
        textarea.readOnly = true;
    }

    render(props) {
        return (
            <React.Fragment>
                <ReactCountdownClock seconds={10}
                     color="#003325"
                     weight ={'9'}
                     font = {'Asul'}
                     paused = {this.state.pause}
                     onClick = {this.handleclick}
                     alpha={0.9}
                     size={200}
                     onComplete = {this.completehandle}/>
            </React.Fragment>
        )
    }
}
