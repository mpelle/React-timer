import React, { Component } from "react";
import TimeCounter from "./TimeCounter";
import "./index.css"
class TimerDisplay extends Component {
render() {

    return (
      <div className="timecounter">
         <TimeCounter/>
      </div>
    );
  }
}
export default TimerDisplay
