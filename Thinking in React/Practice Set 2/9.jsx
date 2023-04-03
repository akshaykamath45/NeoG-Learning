import { useState } from "react";

const red = '#EE4B2B'
const blue = '#89CFF0'
const green = '#7FFFD4'

function ColorPicker(){
  const [redColor,setRedColor]=useState(" ");
  const [blueColor,setBlueColor]=useState(" ");
  const [greenColor,setGreenColor]=useState(" ");

  function displayRed(){
    setRedColor(red);
  }
  function displayBlue(){
    setBlueColor(blue);
  }
  function displayGreen(){
    setGreenColor(green)
  }
  return(
    <div>
      <button onClick={displayRed}>Red Color</button><br/>
      <p>{redColor}</p>
      
      <button onClick={displayBlue}>Blue Color</button><br/>
      <p>{blueColor}</p>

      <button onClick={displayGreen}>Green Color</button><br/>
      <p>{greenColor}</p>
    </div>
  )
}

export default function App() {
    return (
      <div className="App">
        <ColorPicker/>
      </div>
    );
  }
  