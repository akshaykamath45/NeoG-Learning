import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { Link } from "react-router-dom";

export const OpenTodo = () => {
  const { todoData, completedTodos } = useContext(TodoContext);

  return (
    <div>
      <h1>Open Todos: {todoData.length - completedTodos.length}</h1>

      {todoData.map((item) => {
        const { id, title, description } = item;
        const isCompleted = completedTodos.some(
          (completedItem) => completedItem.id === id
        );

        if (!isCompleted) {
          return (
            <div key={id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Status: Not Done</p>
              <Link to={`/todo/${id}`}>Expand Todo</Link>
              <hr />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};
