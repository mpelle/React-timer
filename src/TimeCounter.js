import React, { Component } from "react";
import "./index.css"
class TimeCounter extends Component {

    constructor(props){
      super(props)
      this.state = {
        seconds: 45,
        text: "Start timer?"
      };
      this.timer = 0;
      this.timerTick = this.timerTick.bind(this);
      this.countDown = this.countDown.bind(this);
      this.increase = this.increase.bind(this);
	    this.decrease = this.decrease.bind(this);
    }
    timerTick(){
      if ( this.timer == 0 && this.state.seconds > 0)
      {
          this.timer = setInterval(this.countDown, 1000);
		        this.setState({text: "Counting..."});
      }
    }
	increase(e) {
	   let currentCount = this.state.seconds;
		 if (e.shiftKey)
       {
		     currentCount += 10;
		   }
       else
       {
		       currentCount += 1;
		   }
			this.setState({
			seconds:  currentCount
			});
    }
    decrease(e) {
      let currentCount = this.state.seconds;
      if (e.shiftKey)
      {
        currentCount -= 10;
      }
      else
      {
  			if(currentCount > 0)
    			{
    				currentCount -= 1;
    			}
        else{currentCount = 0;}
      }
         this.setState({
           seconds:  currentCount
         });
     }
    countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({

      seconds: seconds
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
      this.setState({ seconds:45 , text: "Reset?"})
      this.timer = 0
    }
  }

   render() {

    	 var heading = {fontSize: "3rem"}
         return (
           <div>
        		  <button onClick={this.increase} className="incdec" > ▲ </button>
                  <h1 style={heading}>{this.state.seconds}</h1>
        		  <button onClick={this.decrease} className="incdec" > ▼ </button><br /><br />
              <button onClick={this.timerTick} className="buttonstyle" > {this.state.text}  </button>
           </div>
         );
     }
   }
   export default TimeCounter;
