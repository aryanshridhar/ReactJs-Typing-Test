import React, { Component } from 'react';
import Button from './Button';
import generate_words from '../logic/Generator.js';
import Styles from './Display.module.css'
import Type from './Type';

export default class Display extends Component {
    render(pros) {
        return (
            <React.Fragment>
            <div style = {this.props.disp} className = 'row'>
                <div className = 'col-7 text-left'>
                    <div className ={`jumbotron` + " " + Styles.change}>
                        <p className = {Styles.text}>{generate_words(600)}</p>
                    </div>
                </div>
            </div>
            <Type disp = {this.props.disp}/>
            </React.Fragment>
        )
    }
}
