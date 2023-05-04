import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider, CartContext } from "./contexts/CartContext";
import App from "./App";

const rootElement = document.getElementById("root");
export { CartContext };

ReactDOM.render(
  <StrictMode>
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  </StrictMode>,
  rootElement
);
