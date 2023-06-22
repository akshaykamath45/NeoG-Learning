import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { Link } from "react-router-dom";

export const DoneTodo = () => {
  const { completedTodos } = useContext(TodoContext);

  return (
    <div>
      <h1>Done Todos : {completedTodos.length}</h1>
      {completedTodos.length === 0 && <h3>Sorry,No Done Items :(</h3>}

      {completedTodos.map((item) => {
        const { id, title, description } = item;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Status: Done</p>
            <Link to={`/todo/${id}`}>Expand Todo</Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
