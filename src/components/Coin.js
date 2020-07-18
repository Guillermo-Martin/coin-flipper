import React from 'react';

function Coin(props) {
  return(
    <div>
      <img src={props.face} alt={props.alt}></img>
    </div>
  );
}

export default Coin;

