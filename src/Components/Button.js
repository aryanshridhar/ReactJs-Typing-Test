import React, { Component } from 'react'
import Display from './Display'

export default class Button extends Component {

    state ={
        style : {
            display : "inline-block"
        },
        disp : {
            display : "none"
        }
    }


    hidebutton =(e) =>
    {
        e.preventDefault();
        this.setState({style : {...this.state.style , display : "none" }});
        this.setState({disp : {...this.state.disp , display : "flex"}});
    }

    render() {
        return (
            <React.Fragment>
                <div className = 'row mt-5'>
                    <div className = 'col-12 text-center'>
                        <button id = 'startbtn' className = 'btn btn-info' style ={this.state.style} onClick = {this.hidebutton}>Check My WPM</button>
                    </div>
                </div>
                <Display disp = {this.state.disp}/>

            </React.Fragment>
        )
    }
}
