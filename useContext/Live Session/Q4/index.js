import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createContext } from "react";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export const CartContext = createContext(); //creating context

root.render(
  <StrictMode>
    <Router>
      <CartContext.Provider
        value={{
          items: 6,
          cartLogger: () => {
            console.log("Item Clicked");
          },
        }}
      >
        <App />
      </CartContext.Provider>
    </Router>
  </StrictMode>
);
