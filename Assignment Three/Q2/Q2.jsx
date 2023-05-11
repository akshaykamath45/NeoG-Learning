import { useState } from "react";

export const GroceryList = () => {
  const [userInput, setUserInput] = useState("");
  const [itemList, setItemList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const handleGrocerylist = (event) => {
    setUserInput(event.target.value);
  };
  const handleClick = () => {
    if (!userInput) return;
    const presentInGroceryList = itemList.find(
      (item) => item.toLowerCase() === userInput.toLowerCase()
    );
    if (!presentInGroceryList)
      setItemList((itemList) => [...itemList, userInput]);
  };
  const addToCompleteList = (event) => {
    setCompletedList((completedList) => [...completedList, event.target.value]);
    setItemList(itemList.filter((item) => item !== event.target.value));
  };

  return (
    <div>
      <h1>Grocery List</h1>
      <label>Add Items:</label>
      <input type="text" onChange={handleGrocerylist} />
      <button onClick={handleClick}>Add</button>
      <ul>
        {itemList.map((item, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                onChange={addToCompleteList}
                value={item}
              />
              {item}
            </li>
          );
        })}
      </ul>
      <b>Completed List</b>
      <ul>
        {completedList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
