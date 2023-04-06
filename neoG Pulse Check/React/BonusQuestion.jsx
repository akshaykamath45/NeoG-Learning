import {useState} from "react";
function ColorPicker() {
    const [redColor, setRedColor] = useState(" ");
    const [blueColor, setBlueColor] = useState(" ");
    const [greenColor, setGreenColor] = useState(" ");
    const [showContentRed, setShowContentRed] = useState(false);
    const [showContentBlue, setShowContentBlue] = useState(false);
    const [showContentGreen, setShowContentGreen] = useState(false);
    function showRedColor() {
      setShowContentRed(!showContentRed);
      setRedColor(red);
    }
    function showBlueColor() {
      setShowContentBlue(!showContentBlue);
      setBlueColor(blue);
    }
    function showGreenColor() {
      setShowContentGreen(!showContentGreen);
      setGreenColor(green);
    }
    return (
      <>
        <button onClick={showRedColor}>Red Color</button>
        <p>{showContentRed && redColor}</p>
  
        <button onClick={showBlueColor}>Blue Color</button>
        <p>{showContentBlue && blueColor}</p>
  
        <button onClick={showGreenColor}>Green Color</button>
        <p>{showContentGreen && greenColor}</p>
      </>
    );
  }

  export default function App() {
    return (
      <div className="App">
        <ColorPicker />
      </div>
    );
  }