import "./styles.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { Todo } from "./pages/Todo";
import { OpenTodo } from "./pages/OpenTodo";
import { DoneTodo } from "./pages/DoneTodo";
import { TodoItem } from "./pages/TodoItem";
export default function App() {
  const getActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "green" : ""
    };
  };
  return (
    <div className="App">
      <nav>
        <NavLink to="/todos" style={getActiveStyle}>
          Todos
        </NavLink>{" "}
        <br />
        <NavLink to="/done" style={getActiveStyle}>
          Done Todos
        </NavLink>{" "}
        <br />
        <NavLink to="/open" style={getActiveStyle}>
          Open Todos
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/todos" element={<Todo />} />
        <Route path="/open" element={<OpenTodo />} />
        <Route path="/done" element={<DoneTodo />} />
        <Route path="/todo/:todoID" element={<TodoItem />} />
      </Routes>
    </div>
  );
}
