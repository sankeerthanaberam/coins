// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    Total: 0,
    Heads: 0,
    Tails: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  changeCoin = () => {
    const randomNumber = Math.ceil(Math.random() * 2)
    if (randomNumber === 1) {
      this.setState(prevState => ({
        Heads: prevState.Heads + 1,
        Total: prevState.Total + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        Tails: prevState.Tails + 1,
        Total: prevState.Total + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {Total, Heads, Tails, image} = this.state

    return (
      <div className="main-container">
        <div className="inner-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={image} alt="toss result" />
          <button type="button" onClick={this.changeCoin}>
            Toss Coin
          </button>
          <div className="align-row">
            <p className="padding">Total: {Total}</p>
            <p className="padding">Heads: {Heads}</p>
            <p className="padding">Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
