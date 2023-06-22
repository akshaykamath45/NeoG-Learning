import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { CartContext, CartProvider } from "./context/CartContext";
import { WishlistContext, WishlistProvider } from "./context/WishlistContext";
import App from "./App";

export { CartContext };
export { WishlistContext };

const rootElement = document.getElementById("root");
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
