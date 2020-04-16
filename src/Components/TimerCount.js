import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import React from "react"

const renderTime = value => {
    if (value === 0) {
      return <div className="timer">Time Finished !</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
            <div className="value">{60}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

export default renderTime;