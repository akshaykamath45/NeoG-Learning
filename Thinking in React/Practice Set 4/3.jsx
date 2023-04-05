import {useState} from "react";

const itemList = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
];

function VegetableList() {
  const [display, setDisplay] = useState(null);
  function showAll() {
    setDisplay(
      <div>
        {itemList.map(({ id, name, category }) => (
          <li
            key={id}
            style={{ color: category === "Fruit" ? "orange" : "green" }}
          >
            {name}
          </li>
        ))}
      </div>
    );
  }
  function showFruits() {
    setDisplay(
      <div>
        {itemList
          .filter(({ category }) => category === "Fruit")
          .map(({ id, name, category }) => (
            <li
              key={id}
              style={{ color: category === "Fruit" ? "orange" : "green" }}
            >
              {name}
            </li>
          ))}
      </div>
    );
  }
  function showVegetables() {
    setDisplay(
      <div>
        {itemList
          .filter(({ category }) => category === "Vegetable")
          .map(({ id, name, category }) => (
            <li
              key={id}
              style={{ color: category === "Fruit" ? "orange" : "green" }}
            >
              {name}
            </li>
          ))}
      </div>
    );
  }
  return (
    <div>
      <button onClick={showAll}>All</button>
      <button onClick={showFruits}>Fruits</button>
      <button onClick={showVegetables}>Vegetables</button>
      {display}
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <VegetableList />
    </div>
  );
}
