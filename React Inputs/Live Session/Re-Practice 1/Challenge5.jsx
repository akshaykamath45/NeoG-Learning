import "./styles.css";
import { useState } from "react";

const fruits = [
  { id: 1, category: "Apple", name: "Apple Shimla" },
  { id: 2, category: "Apple", name: "Kashmiri Apple" },
  { id: 3, category: "Apple", name: "Ambri Apple" },
  { id: 4, category: "Banana", name: "Banana Robusta" },
  { id: 5, category: "Banana", name: "Raw Banana Green" },
  { id: 6, category: "Orange", name: "Orange Indian" },
  { id: 7, category: "Orange", name: "Orange USA" },
  { id: 8, category: "Grapes", name: "Grapes Black" },
  { id: 9, category: "Grapes", name: "Grapes Seedless" },
  { id: 10, category: "Mango", name: "Badami" },
  { id: 11, category: "Mango", name: "Alphonso" },
  { id: 12, category: "Mango", name: "Ratnagiri" },
];

export default function App() {
  const [fruitData, setFruitData] = useState(fruits);
  const [userInput, setUserInput] = useState("All");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
    if (userInput === "All") {
      setFruitData(fruits);
    }
  };
  return (
    <div>
      <select onChange={handleUserInput}>
        <option value="All">All</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Orange">Orange</option>
        <option value="Grapes">Grapes</option>
        <option value="Mango">Mango</option>
      </select>

      {userInput === "All"
        ? fruitData.map(({ id, category, name }) => (
            <div>
              {name} <br />
            </div>
          ))
        : fruitData
            .filter((fruit) => fruit.category === userInput)
            .map(({ id, category, name }) => (
              <div>
                {name} <br />
              </div>
            ))}
    </div>
  );
}
