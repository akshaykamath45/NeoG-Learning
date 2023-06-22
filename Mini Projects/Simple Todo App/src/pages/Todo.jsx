import { useState, useEffect, useContext } from "react";
import { fakeFetch } from "../api/fakeFetch";
import { TodoContext } from "../contexts/TodoContext";

export const Todo = () => {
  const [todoData, setToDoData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { handleToDoDone, completedTodos } = useContext(TodoContext);

  const isItemCompleted = (itemId) => {
    return completedTodos.some((doneItem) => doneItem.id === itemId);
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const { data, status } = await fakeFetch("https://example.com/api/todos");
      if (status === 200) {
        setToDoData(data.todos);
      }
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {isLoading && <h3>Loading Todo Items .....</h3>}
      {todoData.map((item) => {
        const { id, title, description } = item;
        const completed = isItemCompleted(id);
        const handleToDoClick = () => {
          handleToDoDone(item);
        };
        return (
          <div key={id}>
            <h3 style={{ textDecoration: completed ? "line-through" : "" }}>
              {title}
            </h3>
            <p style={{ textDecoration: completed ? "line-through" : "" }}>
              {description}
            </p>
            <button onClick={handleToDoClick} disabled={completed}>
              Mark as Done
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
