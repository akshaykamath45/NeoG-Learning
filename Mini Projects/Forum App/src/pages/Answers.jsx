import { useParams } from "react-router-dom";
import { questions } from "../api/fakeFetch";
export const Answers = () => {
  const { answerID } = useParams();

  const answer = questions.find(
    (question) => question.id === parseInt(answerID, 10)
  );
  return (
    <div>
      <h2>Answer</h2>
      <p>{answer.answer}</p>
    </div>
  );
};
