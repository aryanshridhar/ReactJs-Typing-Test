import React, { Component } from 'react';
import generate_words from '../logic/Generator.js';
import Styles from './Display.module.css'
import Type from './Type';
import Wpm from './Wpm'

export default class Display extends Component {

    state = {
        words : generate_words(120),
        all_words : 0,
        correctwords : 0,
        wrong_words : 0
    }

    handlecorrect = (item1 ,item2 , item3) =>
    {
        this.setState({all_words : item1});
        this.setState({correctwords : item2});
        this.setState({wrong_words : item3});
    }


    render(pros) {
        return (
            <React.Fragment>
            <div style = {this.props.disp} className = 'row'>
                <div className = 'col-7 text-left'>
                    <div className ={`jumbotron` + " " + Styles.change}>
                        <p className = {Styles.text}>{this.state.words}</p>
                    </div>
                <Type disp = {this.props.disp} words = {this.state.words} handlecorrect = {this.handlecorrect.bind(this)}/>
                </div>
                <Wpm all_words = {this.state.all_words} correctwords = {this.state.correctwords} wrong_words = {this.state.wrong_words} />
            </div>
            </React.Fragment>
        )
    }
}
