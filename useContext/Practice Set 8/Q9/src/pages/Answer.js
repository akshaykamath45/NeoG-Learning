import { useParams } from "react-router-dom";
export const Answer = ({ questionsData, loadData }) => {
  const { answerID } = useParams();

  const findAnswer = questionsData.find(
    (answer) => answer.id === parseInt(answerID)
  );
  console.log(findAnswer);

  const getActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "green" : "black",
      backgroundColor: isActive ? "peach" : "white"
    };
  };

  return (
    <div>
      <h1>Question: </h1>
      <p>{findAnswer.question}</p>
      <h1>Answer: </h1>
      <p>{findAnswer.answer}</p>
    </div>
  );
};
