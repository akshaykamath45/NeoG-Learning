import "./styles.css";
import { useState } from "react";
export default function App() {
  const [textColor, setTextColor] = useState("black");
  const handleChange = (e) => {
    setTextColor(e.target.value);
  };
  return (
    <div>
      <h1 style={{ color: textColor }}>See the magic !</h1>
      <select onChange={handleChange}>
        <option value="black">Black</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
}
