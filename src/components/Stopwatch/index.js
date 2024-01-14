import {Component} from 'react'

import './index.css'

import GetBalls from '../GetBalls'

const array = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
]

class Stopwatch extends Component {
  state = {
    match: 0,
    score: 0,
    time: 0,
    isStart: false,
    nameBtn: 'Start Game Now...',
  }

  componentDidMount() {
    this.onHeader()
  }

  onStartBtn = () => {
    this.setState(prevState => ({
      isStart: !prevState.isStart,
    }))
  }

  onHeader = () => {
    const {score, match} = this.state
    const math = Math.floor(Math.random() * 10)

    const timer = Math.round(setTimeout(this.tick, 10000))

    const seconds = Math.floor((timer % 360000) / 6000)

    return (
      <>
        <h1>{math}</h1>
        <h1>{seconds}</h1>
        <h1>{seconds}</h1>
      </>
    )
  }

  tick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1,
    }))
  }

  render() {
    const {match, score, isStart, nameBtn, arr, seconds} = this.state

    return (
      <>
        <div>
          <div className="app-container">
            <div className="header">{this.onHeader()}</div>

            <div className="playground">
              {array.map(each => (
                <GetBalls key={each} ball={each} math={match} />
              ))}
            </div>

            <button
              type="button"
              className="startBtn"
              onClick={this.onStartBtn}
            >
              {nameBtn}
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default Stopwatch
