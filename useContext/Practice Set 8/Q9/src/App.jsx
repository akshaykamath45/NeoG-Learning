import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { Routes, Route, NavLink } from "react-router-dom";
import { Questions } from "./pages/Questions";
import { Answer } from "./pages/Answer";
export default function App() {
  const [questionsData, setQuestionsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getQuestionData = async () => {
    setIsLoading(true);
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/questions"
      );
      if (status === 200) {
        setQuestionsData(data.questions);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getQuestionData();
  }, []);

  const getActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "green" : "black",
      backgroundColor: isActive ? "peach" : "white"
    };
  };
  return (
    <div>
      <nav>
        <NavLink to="/" style={getActiveStyle}>
          Home
        </NavLink>{" "}
        ||
        <NavLink to="/questions" style={getActiveStyle}>
          Questions
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home questionsData={questionsData} loadData={isLoading} />}
        ></Route>
        <Route
          path="/questions"
          element={
            <Questions questionsData={questionsData} loadData={isLoading} />
          }
        ></Route>
        <Route
          path="/answer/:answerID"
          element={
            <Answer questionsData={questionsData} loadData={isLoading} />
          }
        ></Route>
      </Routes>
    </div>
  );
}
