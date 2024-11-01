import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateNumber = () => {
    this.setState({number: Math.floor(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-image">
        <div className="container">
          <h1 className="title">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.generateNumber} className="btn" type="button">
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
