import {Component} from 'react'

class Stopwatch extends Component {
  state = {timeinSeconds: 0, timeRunning: false}

  timerViewer = () => {
    const {timeinSeconds} = this.state
    const minutes = Math.floor(timeinSeconds / 60)
    const seconds = Math.floor(timeinSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  resetButton = () => {
    clearInterval(this.intervalId)
    this.setState({
      timeinSeconds: 0,
      timeRunning: false,
    })
  }

  stopTimer = () => {
    const {timeRunning} = this.state

    if (timeRunning === true) {
      clearInterval(this.intervalId)
    }
    this.setState({timeRunning: false})
  }

  incrementTimeElapsedInseconds = () => {
    this.setState(prevState => ({
      timeinSeconds: prevState.timeinSeconds + 1,
    }))
  }

  startTimer = () => {
    const {timeRunning} = this.state
    if (timeRunning === false) {
      this.intervalId = setInterval(this.incrementTimeElapsedInseconds, 1000)
    }
    this.setState({
      timeRunning: true,
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Stopwatch</h1>
          <div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            {this.timerViewer()}
            <div>
              <button type="button" onClick={this.startTimer}>
                Start
              </button>
              <button type="button" onClick={this.stopTimer}>
                Stop
              </button>
              <button type="button" onClick={this.resetButton}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
