import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import React, { Component } from 'react'
import renderTime from './TimerCount'

export default class Timer extends Component {
    render() {
        return (
            <div>
                <CountdownCircleTimer
                    isPlaying
                    durationSeconds={60}
                    colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                    renderTime={renderTime}
                    onComplete={() => [true, 1000]}
                />     
            </div>
        )
    }
}
