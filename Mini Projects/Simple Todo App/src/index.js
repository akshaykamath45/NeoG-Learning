import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { TodoContext, TodoProvider } from "./contexts/TodoContext";
const rootElement = document.getElementById("root");

export { TodoContext };
ReactDOM.render(
  <StrictMode>
    <Router>
      <TodoProvider>
        <App />
      </TodoProvider>
    </Router>
  </StrictMode>,
  rootElement
);
