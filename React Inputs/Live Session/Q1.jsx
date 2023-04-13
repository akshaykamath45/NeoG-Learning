import "./styles.css";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>{text}</p>
    </div>
  );
}
