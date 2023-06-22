import { createContext } from "react";
import { useState, useEffect } from "react";
import { fakeFetch } from "../api/fakeFetch";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoData, setToDoData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleToDoDone = (item) => {
    setCompletedTodos([...completedTodos, item]);
    setToDoData((prevTodoData) =>
      prevTodoData.map((todo) => {
        if (todo.id === item.id) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      })
    );
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
    <TodoContext.Provider
      value={{
        todoData,
        completedTodos,
        isLoading,
        handleToDoDone
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
