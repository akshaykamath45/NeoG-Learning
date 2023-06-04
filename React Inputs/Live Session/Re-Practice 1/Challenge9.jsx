import "./styles.css";
import React, { useState } from "react";

const fruits = [
  { name: "Apple", color: "Red", quantity: 10 },
  { name: "Banana", color: "Yellow", quantity: 5 },
  { name: "Orange", color: "Orange", quantity: 3 },
  { name: "Grape", color: "Purple", quantity: 7 },
];

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [fruitData, setFruitData] = useState({});
  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const showFruits = () => {
    const showFruit = fruits.find((fruit) => fruit.name === userInput);
    setFruitData(showFruit);
  };
  return (
    <div className="App">
      <input placeholder="Search for fruits" onChange={handleInput}></input>
      <button onClick={showFruits}>Search</button>
      {fruitData ? (
        <div>
          Name: {fruitData.name} <br />
          Color: {fruitData.color} <br />
          Quantity: {fruitData.quantity} <br />
        </div>
      ) : (
        "Fruit Not Found"
      )}
    </div>
  );
}