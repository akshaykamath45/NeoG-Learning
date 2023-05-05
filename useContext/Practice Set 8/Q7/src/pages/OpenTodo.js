import { Link } from "react-router-dom";
export const OpenTodo = ({ todoData }) => {
  console.log(todoData);
  return (
    <div>
      <h1>Open Todos</h1>
      {todoData.map(({ id, title, description, isCompleted }) => (
        <div>
          {!isCompleted && (
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Status: {isCompleted ? "Done" : "Not Done"}</p>
              <Link to={`/todo/${id}`}>Expand Todo</Link>
              <hr />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
