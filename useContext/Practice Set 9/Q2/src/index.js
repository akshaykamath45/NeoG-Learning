import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { BookContext, BookProvider } from "./contexts/BookContext";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { BookContext };
root.render(
  <StrictMode>
    <Router>
      <BookProvider>
        <App />
      </BookProvider>
    </Router>
  </StrictMode>
);
