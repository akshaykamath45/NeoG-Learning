import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { VideoContext, VideoProvider } from "./contexts/VideoContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export { VideoContext };
root.render(
  <StrictMode>
    <Router>
      <VideoProvider>
        <App />
      </VideoProvider>
    </Router>
  </StrictMode>
);
