import React, { Component } from 'react';
import Coin from './../components/Coin';

class CoinFlipper extends Component {
  // static defaultProps = {
  //   face: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg",
  //   alt: "tails"
  // }

  state = {
    face: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg",
    alt: "tails",
    flips: 0,
    tails: 0,
    heads: 0
  }

  flipCoin = () => {
    // generate either 1 or 2
    let randomNum = Math.floor((Math.random() * 2) + 1);
    // add 1 to the 'flips' count
    this.setState(curState => ({ flips: curState.flips + 1}));
    // if randomNum is 1, display heads; otherwise, display tails
    if(randomNum === 1) {
      this.setState({ face: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg", alt: "tails" });
      this.setState(curState => ({ tails: curState.tails + 1}));
    } else {
      this.setState({ face: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg", alt: "heads"});
      this.setState(curState => ({ heads: curState.heads + 1}));
    }
  }

  render() {
    return (
      <div>
        {/* pass in state as props to coin */}
        <Coin 
          face={this.state.face} 
          alt={this.state.alt}
        />

        <h2>Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</h2>
        {/* button */}
        <button onClick={this.flipCoin}>Flip!</button>
      </div>
    );
  }
}

export default CoinFlipper;