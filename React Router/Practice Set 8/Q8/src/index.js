import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { DoneProvider, DoneContext } from "./contexts/DoneProvider";
const rootElement = document.getElementById("root");
export { DoneContext };
ReactDOM.render(
  <StrictMode>
    <Router>
      <DoneProvider>
        <App />
      </DoneProvider>
    </Router>
  </StrictMode>,
  rootElement
);
