import { useState } from 'react';

function Clickr() {
  
  const [clickCounter, setClickCounter] = useState(0);    // this is a returned Array that is destructured

  function handleClick() {

    setClickCounter(clickCounter + 1);
    //console.log('Click Happened!');
  
  } // end of handleClick

  return (
    <div>
      <h2>CLICKR</h2>
      <p>You have clicked {clickCounter} times.</p>
      <button onClick={ handleClick }>Click</button>
    </div>
  )

} // end of Clickr
 

export default Clickr;
