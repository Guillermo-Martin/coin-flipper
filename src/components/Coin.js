import React from 'react';
import './../assets/styles.css';

function Coin(props) {
  return(
    <div>
      <img src={props.face} alt={props.alt} className="Coin"></img>
    </div>
  );
}

export default Coin;

