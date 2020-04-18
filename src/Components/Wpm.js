import React, { Component } from 'react'
import Timer from './Timer'
import Styles from './Wpm.module.css'

export default class Wpm extends Component {

    render() {
        return (
            <div className ='col-5 text-center'>
                <div id = 'change' className = {Styles.settimer}>
                    <p id = 'start'>Click on the timer to start :-</p>
                <Timer/>
                </div>
                    <div className = 'row'>
                        <div className = 'col-12 text-center'>
                            <div className = {'jumbotron mt-5' + " " + Styles.jumbo}>
                                <p className = {Styles.wpm}>Your  WPM : </p>
                                <p className = {Styles.wpm + " " + Styles.setfont}>{this.props.all_words}</p>
                                <p>Correct Words : {this.props.correctwords} </p>
                                <p>Wrong Words : {this.props.wrong_words}</p>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
