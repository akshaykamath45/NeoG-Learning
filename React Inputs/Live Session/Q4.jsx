import "./styles.css";
import { useState } from "react";
export default function App() {
  const [color, setColor] = useState("black");

  const handleChange = (event) => {
    console.log(event.target.value);
    setColor(event.target.value);
  };
  return (
    <div className="App">
      <h1 style={{ color: color }}>Hello CodeSandbox</h1>

      <select onChange={handleChange}>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
}
