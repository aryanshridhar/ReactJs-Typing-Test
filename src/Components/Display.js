import React, { Component } from 'react';
import Button from './Button';
import generate_words from '../logic/Generator.js';
import Styles from './Display.module.css'
import Type from './Type';
import Wpm from './Wpm'

export default class Display extends Component {

    state = {
        words : generate_words(600),
        correctwords : 0
    }

    handlecorrect = (item) =>
    {
        this.setState({correctwords : item});
    }


    render(pros) {
        return (
            <React.Fragment>
            <div style = {this.props.disp} className = 'row'>
                <div className = 'col-7 text-left'>
                    <div className ={`jumbotron` + " " + Styles.change}>
                        <p className = {Styles.text}>{this.state.words}</p>
                    </div>
                </div>
                <Wpm words = {this.state.correctwords}/>
            </div>
            <Type disp = {this.props.disp} words = {this.state.words} handlecorrect = {this.handlecorrect.bind(this)}/>
            </React.Fragment>
        )
    }
}
