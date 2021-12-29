import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  countLetters = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img"
        />
        <h1>Calculate the letters you enter</h1>
        <label htmlFor="inputEl">Enter the phrase</label>
        <input id="inputEl" onChange={this.countLetters} type="text" />
        <p>No.of letters: {count}</p>
      </div>
    )
  }
}

export default LettersCalculator
