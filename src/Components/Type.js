import React, { Component } from 'react'
import Styles from './Type.module.css'
import TypingHead from './TypingHead'

export default class Type extends Component {
    render() {
        return (
            <React.Fragment>
                <TypingHead disp = {this.props.disp}/>
                <div>
                    <div className = 'row' style = {this.props.disp}>
                        <div className = 'col-7 text-left'>
                            <textarea
                                placeholder = "Enter your words" 
                                className = {"form-control" + " " +Styles.textarea1}>

                            </textarea>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
