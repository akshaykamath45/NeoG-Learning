import { useState } from "react";

const todoItems = [
  { id: 1, task: "Writing 1-page poem", isDone: true },
  { id: 2, task: "Gym", isDone: false },
  { id: 3, task: "Shopping", isDone: false },
  { id: 4, task: "Standup call", isDone: true },
];
function MarkingToDoList({ items }) {
  const [taskList, setTaskList] = useState(items);

  function handleToggle(id) {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  }

  return (
    <div>
      {taskList.map(({ id, task, isDone }) => (
        <li
          key={id}
          style={{
            textDecoration: isDone ? "line-through" : "",
            color: isDone ? "red" : "",
          }}
        >
          {task}
          <button onClick={() => handleToggle(id)}>Mark as Done</button>
        </li>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Tab objectInformation={characters} />
      <MoveFontSize />
      <VegetableList />
      {/* <ToDoList items={todoItems}/> */}
      <MarkingToDoList items={todoItems} />
    </div>
  );
}
