import { useContext } from "react";
import { Link } from "react-router-dom";
import { DoneContext } from "../contexts/DoneProvider";
export const DoneTodo = ({ todoData }) => {
  console.log(todoData);
  const { done } = useContext(DoneContext);
  console.log(done);
  return (
    <div>
      <h1>Done Todos</h1>

      <b>Total todos: {done.length}</b>
      {done.map(({ id, title, description, isCompleted }) => (
        <div>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
            {/* <p>Status: {isCompleted ? "Done" : "Not Done"}</p> */}
            <Link to={`/todo/${id}`}>Expand Todo</Link>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};
