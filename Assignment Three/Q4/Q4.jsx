import { useState } from "react";

export const SetBackground = () => {
  const [getInput, setGetInput] = useState("white");

  const handleChange = (event) => {
    setGetInput(event.target.value);
  };
  return (
    <div>
      <h1>Set Background Color</h1>
      <div
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: getInput,
          textAlign: "center",
        }}
      >
        <select onChange={handleChange}>
          <option value="white">White</option>
          <option value="pink">Pink</option>
          <option value="tomato">Tomato</option>
          <option value="aquamarine">Aquamarine</option>
        </select>
      </div>
    </div>
  );
};
