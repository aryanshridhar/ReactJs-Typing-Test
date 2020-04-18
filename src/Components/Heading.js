import React, { Component } from 'react'
import Styles from './Heading.module.css'

export default class Heading extends Component {
    render() {
        return (
            <div>
                <div className = 'row'>
                    <div className = 'col-12 text-center'>
                        <label className ={Styles.head}>Typing test</label>
                    </div>
                </div>
            </div>
        )
    }
}
