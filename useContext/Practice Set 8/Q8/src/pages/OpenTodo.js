import { useContext } from "react";
import { Link } from "react-router-dom";
import { DoneContext } from "../contexts/DoneProvider";

export const OpenTodo = ({ todoData }) => {
  console.log(todoData);
  const { done } = useContext(DoneContext);
  console.log(done.length);
  console.log(todoData.length);

  const openTodoItems = todoData.filter((item) => {
    return !done.some((doneItem) => doneItem.id === item.id);
  });

  // If a match is found (i.e., there is an element in the done array with the same id as the current item being processed), the some function returns true.
  // If no match is found (i.e., none of the elements in the done array have the same id as the current item), the some function returns false.
  // The filter function uses the return value of the some function to determine whether to include or exclude the current item in the resulting array.
  // If the some function returns false (indicating that no match was found in the done array), the item is included in the openTodoItems array.
  // If the some function returns true (indicating a match was found in the done array), the item is excluded from the openTodoItems array.

  console.log(openTodoItems);

  return (
    <div>
      <h1>Open Todos</h1>

      <b>Total todos: {openTodoItems.length}</b>

      {openTodoItems.map(({ id, title, description, isCompleted }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Status: {isCompleted ? "Done" : "Not Done"}</p>
          <Link to={`/todo/${id}`}>Expand Todo</Link>
          <hr />
        </div>
      ))}
    </div>
  );
};
