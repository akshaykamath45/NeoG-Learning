import { useContext } from "react";
import { Link } from "react-router-dom";
import { DoneContext } from "../contexts/DoneProvider";

export const Todo = ({ todoData }) => {
  const { handleDoneItems, done } = useContext(DoneContext);
  console.log(todoData);

  const isItemCompleted = (itemId) => {
    return done.some((doneItem) => doneItem.id === itemId);
  };

  return (
    <div>
      <h1>This is the Todo Home Page</h1>
      {todoData.map((item) => {
        const { id, title, description } = item;
        const completed = isItemCompleted(id);

        const handleTodoClick = () => {
          handleDoneItems(item);
        };

        return (
          <div key={id}>
            <h3 style={{ textDecoration: completed ? "line-through" : "none" }}>
              {title}
            </h3>
            <p style={{ textDecoration: completed ? "line-through" : "none" }}>
              {description}
            </p>
            <button onClick={handleTodoClick}>Mark as Done</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
