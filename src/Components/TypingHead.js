import React, { Component } from 'react'
import Styles from './TypingHead.module.css'
import Wpm from './Wpm'
import Button from './Button'

export default class TypingHead extends Component {
    render() {
        return (
            <React.Fragment>
            <div className = 'row' style = {this.props.disp}>
                <div className = 'col-7 text-left'>
                    <p className = {Styles.head}>Start Typing :</p>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
