import { useState } from "react";

const todoItems = [
  { id: 1, task: "Writing 1-page poem", isDone: true },
  { id: 2, task: "Gym", isDone: false },
  { id: 3, task: "Shopping", isDone: false },
  { id: 4, task: "Standup call", isDone: true },
];

function ToDoList({ items }) {
  const [taskList, setTaskList] = useState(items);

  const removeTask = (id) => {
    const updatedList = taskList.filter((item) => item.id !== id);
    setTaskList(updatedList);
  };
  return (
    <div>
      {taskList.map(({ id, task, isDone }) => (
        <li key={id} style={{ textDecoration: isDone ? "line-through" : " " }}>
          {task}
          <button onClick={() => removeTask(id)}>X</button>
        </li>
      ))}
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <ToDoList items={todoItems} />
    </div>
  );
}
