import React, { Component } from 'react';
import Coin from './../components/Coin';

class CoinFlipper extends Component {
  static defaultProps = {
    face: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg",
    alt: "tails"
  }

  flipCoin = () => {
    // generate either 1 or 2
    let randomNum = Math.floor((Math.random() * 2) + 1);
    // if randomNum is 1, display heads; otherwise, display tails
    if(randomNum === 1) {
      console.log("Heads!")
    } else {
      console.log("Tails!");
    }
  }

  render() {
    return (
      <div>
        {/* pass in props to coin; props will be the source of the image */}
        <Coin 
          face={this.props.face} 
          alt={this.props.alt}
        />

        {/* button */}
        <button onClick={this.flipCoin}>Flip!</button>
      </div>
    );
  }
}

export default CoinFlipper;