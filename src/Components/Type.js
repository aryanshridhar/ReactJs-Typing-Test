import React, { Component } from 'react'
import Styles from './Type.module.css'
import TypingHead from './TypingHead'
import Check from '../logic/Check'

export default class Type extends Component {

    state = {
        all_words : 0,
        correct_typed : 0,
        wrong_words : 0
    }


    typinghandle = (e) =>
    {
        let words_typed = e.target.value.split(' ');
        let to_check = this.props.words.split(' ');
        let typed = Check(words_typed , to_check)
        this.setState({all_words : typed[0]});
        this.setState({correct_typed : typed[1]});
        this.setState({wrong_words : typed[2]});
        this.props.handlecorrect(this.state.all_words , this.state.correct_typed , this.state.wrong_words);
    }

    render() {
        return (
            <React.Fragment>
                <TypingHead disp = {this.props.disp}/>
                <div className = 'row' style = {this.props.disp}>
                    <div className = 'col-12 text-left'>
                        <textarea
                            id = 'totype'
                            readOnly = {true}
                            autoFocus
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
