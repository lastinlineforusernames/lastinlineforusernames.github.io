import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sessionTime: 25,
      breakTime: 5,
      timeLeft: 1500,
      sessionLabel: "Session Time Remaining",
      currentState: "Session",
      isRunning: false,
      hasStarted: false,
      interval: 90
    }
    this.handleClick = this.handleClick.bind(this);
    this.timeRemaining = this.timeRemaining.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
    this.beepBeep = this.beepBeep.bind(this);
    this.runTimer = this.runTimer.bind(this);
    this.timeToggle = this.timeToggle.bind(this);
  }
  
  timeToggle() {
    if (this.state.interval === 90) {
      this.setState({
        interval: 1000
      })
    } else {
      this.setState({
        interval: 90
      })
    }
  }

  beepBeep() {
    this.beeper.play();
  }

  timeRemaining(num) {
    const total = num;
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    const strMinutes = ('0' + minutes).slice(-2);
    const strSeconds = ('0' + seconds).slice(-2);
    return {total, minutes, seconds, strMinutes, strSeconds};
  };

  decrementTimer() {
    this.setState({
      timeLeft: this.state.timeLeft - 1
    })
  };

  componentDidMount() {
    this.runTimer();
  }

  runTimer() {
    this.myInterval = setInterval(() => {
      if (!this.state.hasStarted) {
        this.setState({
          hasStarted: true,
          timeLeft: this.state.sessionTime * 60
        })
      }
      if (this.state.isRunning) {
        if (this.state.timeLeft <= 0) {
          this.beeper.play()
          switch (this.state.currentState) {
            case "Session": 
              this.setState({
                currentState: "Break",
                sessionLabel: "Break Time Remaining",
                timeLeft: this.state.breakTime * 60
              })
              break;
            case "Break":
                this.setState({
                  currentState: "Final Session",
                  sessionLabel: "Session Time Remaining",
                  timeLeft: this.state.sessionTime * 60
                })
              break;
            case "Final Session":
                clearTimeout(this.interval);
                this.setState({
                  isRunning: false,
                  currentState: "Session"
                })
              break;
            default:
              console.log("Session type not defined"); 
              break;
          }
        } else {
          this.setState(({ timeLeft }) => ({
            timeLeft: timeLeft - 1
          }))
        }
      }
    }, 90);
  }

  handleClick(e) {
    switch (e.target.id) {
      case "session-increment":
        if (this.state.sessionTime < 60 && !this.state.isRunning) {
          this.setState({
            sessionTime: this.state.sessionTime + 1,
          }, () => {
            this.setState({
              timeLeft: this.state.sessionTime * 60
            })
          })
        }
        break;
      case "session-decrement":
        if (this.state.sessionTime > 1 && !this.state.isRunning) {
          this.setState({
            sessionTime: this.state.sessionTime - 1,
          }, () => {
            this.setState({
              timeLeft: this.state.sessionTime * 60
            })
          })
        }
        break;
      case "break-increment":
        if (this.state.breakTime < 60 && !this.state.isRunning) {
          this.setState({
            breakTime: this.state.breakTime + 1
          })
        }
        break;
      case "break-decrement":
        if (this.state.breakTime > 1 && !this.state.isRunning) {
          this.setState({
            breakTime: this.state.breakTime - 1
          })
        }
        break;
      case "start_stop":
        if (!this.state.isRunning) {
          this.setState({
            isRunning: true
          })
        } else {
          this.setState({
            isRunning: false
          })
        }
        break;
      case "reset":
        this.setState({
          sessionTime: 25,
          breakTime: 5,
          timeLeft: 1500,
          sessionLabel: "Session Time Remaining",
          currentState: "Session",
          isRunning: false,
          hasStarted: false
        })
        this.beeper.pause();
        this.beeper.currentTime = 0;
        break;
      default:
        break;
    }
  }
 
  render() {
    return (
      <div id="wrapper">
        <div id="timer-label" className="wide-label">{this.state.sessionLabel}</div>
        <div id="time-left" className="wide-label">
          {this.timeRemaining(this.state.timeLeft).strMinutes + ":" + this.timeRemaining(this.state.timeLeft).strSeconds}
        </div>
        <div id="start_stop" className="x-large-button" onClick={this.handleClick}>Start/Stop</div>
        <div id="reset" className="x-large-button" onClick={this.handleClick}>Reset</div>
        <div id="session-label" className="label">Session Length</div>
        <div id="session-length" className="label">{this.state.sessionTime}</div>
        <div id="session-decrement" className="small-button" onClick={this.handleClick}>-</div>
        <div id="session-increment" className="small-button" onClick={this.handleClick}>+</div>
        <div id="break-label" className="label">Break Length</div>
        <div id="break-length" className="label">{this.state.breakTime}</div>
        <div id="break-decrement" className="small-button" onClick={this.handleClick}>-</div>
        <div id="break-increment" className="small-button" onClick={this.handleClick}>+</div>
        <audio id="beep" preload="auto"
          ref={(audio) => {
            this.beeper = audio;
          }} 
          src="https://ia802706.us.archive.org/20/items/WilhelmScreamSample/WilhelmScream.mp3"></audio>
        <div id="time-toggle" className="small-button" onClick={this.timeToggle}></div>
        <div id="toggle-text">
          Interval is set to {this.state.interval}ms. The FCC tests seem to work with 90ms, but throw errors on 1000ms.
        </div>
      </div>
    )
  }
}