// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    let counter = 0
    if (speed !== 200) {
      const uniqueId = setInterval(() => {
        this.setState(prevState => ({
          speed: Math.min(prevState.speed + 1, 200),
        }))
        counter += 1
        if (counter === 10) {
          clearInterval(uniqueId)
        }
      }, 50)
    }
  }

  onApplyBrake = () => {
    const {speed} = this.state
    let counter = 0
    if (speed !== 0) {
      const uniqueId = setInterval(() => {
        this.setState(prevState => ({
          speed: Math.max(prevState.speed - 1, 0),
        }))
        counter += 1
        if (counter === 10) {
          clearInterval(uniqueId)
        }
      }, 30)
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speed-meter-img"
        />
        <h1 className="speed-measure">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button className="accelerate-btn" onClick={this.onAccelerate}>
            Accelerate by 10mph
          </button>
          <button className="brake-btn" onClick={this.onApplyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
