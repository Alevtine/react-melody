import React from 'react';

class Timer extends React.Component {
  state = {
    seconds: 0,
    minutes: 0
  }

  componentDidMount = () => {
    this.setState({
      seconds: 59,
      minutes: 5
    })
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({
      seconds: this.state.seconds > 0 || this.state.minutes === 0 ? this.state.seconds - 1 : this.state.seconds = 59
    })
    this.checkMinutes();
    if (this.state.minutes <= 0) {
      clearInterval(this.interval);
    }
  }

  checkMinutes = () => {
    this.setState({
      minutes: this.state.seconds === 0 && this.state.minutes > 0 ? this.state.minutes - 1 : this.state.minutes
    })
  }

  render () {
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;

    const getZero = (value) => {
      value = value.toString();
      return value.length < 2 ? '0' + value : value;
    }

    return (
      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">{getZero(minutes)}</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">{getZero(seconds)}</span>
      </div>
    )
  }
}

export default Timer;
