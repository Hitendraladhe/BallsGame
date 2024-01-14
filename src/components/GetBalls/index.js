import {Component} from 'react'

class GetsBalls extends Component {
  state = {
    value: 0,
    random: 0,
  }

  componentDidMount() {
    this.onMatchBalls()
  }

  onMatchBalls = () => {
    const {value} = this.state
    const values = Math.floor(Math.random() * 10)
    this.setState({
      value: values,
    })
    console.log('math')
    console.log(value)
  }

  getButton = () => {
    const values = Math.floor(Math.random() * 10)
    return (
      <button type="button" className="btn" onClick={this.onMatchBalls}>
        {values}
      </button>
    )
  }

  render() {
    const {value} = this.state

    return <div>{this.getButton()}</div>
  }
}

export default GetsBalls
