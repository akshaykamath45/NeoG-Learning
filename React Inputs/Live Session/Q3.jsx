import "./styles.css";
import React, { useState } from "react";

const fruits = [
  { name: "Apple", color: "Red", quantity: 10 },
  { name: "Banana", color: "Yellow", quantity: 5 },
  { name: "Orange", color: "Orange", quantity: 3 },
  { name: "Grape", color: "Purple", quantity: 7 },
];

export default function App() {
  const [userInput, setUserInput] = useState();
  const [fruitData, setFruitData] = useState();
  const handleInput = (event) => {
    setUserInput(event.target.value);
  };
  const findFruits = () => {
    const showFruits = fruits.find(({ name }) => name === userInput);
    setFruitData(showFruits);
  };
  return (
    <div className="App">
      <input onChange={handleInput} />
      <button onClick={findFruits}>Search </button>
      <div>
        {fruitData ? (
          <div>
            <p>Name : {fruitData.name}</p>
            <p>Color : {fruitData.color}</p>
            <p>Quantity : {fruitData.quantity}</p>
          </div>
        ) : (
          <p>Fruit Not Found</p>
        )}
      </div>
    </div>
  );
}
