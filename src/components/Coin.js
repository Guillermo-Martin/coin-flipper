import React from 'react';

function Coin(props) {
  return(
    <div>
      <img src={props.face} alt="tails"></img>
    </div>
  );
}

export default Coin;


// {/* <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg" alt="heads"></img> */}
