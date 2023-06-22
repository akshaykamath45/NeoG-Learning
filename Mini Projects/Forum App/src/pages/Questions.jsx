import { fakeFetch } from "../api/fakeFetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const QuestionItem = ({ id, question }) => {
  const [vote, setVote] = useState(0);

  const handleUpvote = () => {
    setVote(vote + 1);
  };

  const handleDownvote = () => {
    setVote(vote - 1);
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <h2>{question}</h2>
      <div>
        <button style={{ marginRight: "5px" }} onClick={handleUpvote}>
          Upvote
        </button>
        <button style={{ marginRight: "5px" }} onClick={handleDownvote}>
          Downvote
        </button>
        <span>{vote}</span>
      </div>
      <Link to={`/answer/${id}`}>Answer</Link>
    </div>
  );
};

export const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/questions"
      );
      if (status === 200) {
        setQuestions(data.questions);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {isLoading && <h1>Loading Questions ....</h1>}
      {questions.map(({ id, question }) => (
        <QuestionItem key={id} id={id} question={question} />
      ))}
    </div>
  );
};
