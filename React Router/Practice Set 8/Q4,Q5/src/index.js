import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider, CartContext } from "./contexts/CartContext";
import App from "./App";
import { WishlistProvider, WishlistContext } from "./contexts/WishlistContext";

const rootElement = document.getElementById("root");
export { CartContext };
export { WishlistContext };
ReactDOM.render(
  <StrictMode>
    <Router>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </Router>
  </StrictMode>,
  rootElement
);
