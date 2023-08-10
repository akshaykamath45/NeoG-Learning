import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { MenuContext, MenuProvider } from "./contexts/MenuContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export { MenuContext };
root.render(
  <StrictMode>
    <Router>
      <MenuProvider>
        <App />
      </MenuProvider>
    </Router>
  </StrictMode>
);
