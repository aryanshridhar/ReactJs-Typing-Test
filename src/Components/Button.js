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
        this.setState({disp : {...this.state.disp , display : "block"}});
    }

    render() {
        return (
            <React.Fragment>
            <div>
                <div className = 'row mt-5'>
                    <div className = 'col-12 text-center'>
                        <button className = 'btn btn-info' style ={this.state.style} onClick = {this.hidebutton}>Start Test</button>
                    </div>
                </div>
            </div>
            <Display disp = {this.state.disp}/>
            </React.Fragment>
        )
    }
}
