import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const TodoItem = () => {
  const { todoID } = useParams();
  const { todoData, completedTodos } = useContext(TodoContext);

  const todoItem = todoData.find((item) => item.id === parseInt(todoID, 10));
  const isCompleted = completedTodos.some(
    (item) => item.id === parseInt(todoID, 10)
  );

  if (!todoItem) {
    return <div>Todo not found.</div>;
  }

  return (
    <div>
      <h1>Todo Description</h1>
      <br />
      <h3>Title: {todoItem.title}</h3>
      <p>
        <b>Description: </b>
        {todoItem.description}
      </p>
      <p>
        <b>Status: </b>
        {isCompleted ? "Done" : "Not Done"}
      </p>
    </div>
  );
};
