import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createContext } from "react";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const CartContext = createContext(); //creating context

root.render(
  <StrictMode>
    <Router>
      <CartContext.Provider value={{ items: 4 }}>
        <App />
      </CartContext.Provider>
    </Router>
  </StrictMode>
);
