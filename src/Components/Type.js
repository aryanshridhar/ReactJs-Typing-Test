import React, { Component } from 'react'
import Styles from './Type.module.css'
import TypingHead from './TypingHead'
import Check from '../logic/Check'

export default class Type extends Component {

    state = {
        cursorpos : 0,
        correct_typed : 0
    }


    typinghandle = (e) =>
    {
        let words_typed = e.target.value.split(' ');
        let to_check = this.props.words.split(' ');
        let correct_typed = Check(words_typed , to_check)
        this.setState({state : this.state.cursorpos++ });
        this.setState({correct_typed : correct_typed});
        this.props.handlecorrect(this.state.correct_typed);
    }

    render() {
        return (
            <React.Fragment>
                <TypingHead disp = {this.props.disp}/>
                <div className = 'row' style = {this.props.disp}>
                    <div className = 'col-7 text-left'>
                        <textarea
                            onChange = {this.typinghandle}
                            autoFocus
                            placeholder = "Enter your words" 
                            className = {"form-control" + " " +Styles.textarea1}>
                        </textarea>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
