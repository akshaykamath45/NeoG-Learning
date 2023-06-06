import "./styles.css";
import { useState } from "react";
export default function App() {
  const [text, setText] = useState("");
  const handleInput = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <input onChange={handleInput}></input>
      <p>{text}</p>
    </div>
  );
}
