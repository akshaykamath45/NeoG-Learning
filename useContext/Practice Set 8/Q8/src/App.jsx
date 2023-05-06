import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { DoneTodo } from "./pages/DoneTodo";
import { OpenTodo } from "./pages/OpenTodo";
import { Todo } from "./pages/Todo";
import { TodoDescription } from "./pages/TodoDescription";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const getToDoData = async () => {
    try {
      const { data, status } = await fakeFetch("https://example.com/api/todos");
      if (status === 200) {
        setTodoList(data.todos);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getToDoData();
  }, []);

  const getActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "green" : "black",
      backgroundColor: isActive ? "lightyellow" : "white"
    };
  };
  return (
    <div>
      <nav>
        <NavLink to="/" style={getActiveStyle}>
          Home
        </NavLink>{" "}
        ||
        <NavLink to="/done" style={getActiveStyle}>
          Done Todo
        </NavLink>{" "}
        ||
        <NavLink to="/open" style={getActiveStyle}>
          Open Todo
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Todo todoData={todoList} />} />
        <Route path="/done" element={<DoneTodo todoData={todoList} />} />
        <Route path="/open" element={<OpenTodo todoData={todoList} />} />
        <Route
          path="/todo/:todoID"
          element={<TodoDescription todoData={todoList} />}
        />
      </Routes>
    </div>
  );
}
