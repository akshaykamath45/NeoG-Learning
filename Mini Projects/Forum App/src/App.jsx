import { Home } from "./pages/Home";
import { Questions } from "./pages/Questions";
import { Answers } from "./pages/Answers";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/answer/:answerID" element={<Answers />} />
      </Routes>
    </div>
  );
}
