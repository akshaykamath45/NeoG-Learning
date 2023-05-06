import { Link } from "react-router-dom";
import { useState } from "react";

export const Questions = ({ questionsData, loadData }) => {
  const initialVotes = questionsData.map(() => 0);
  const [votes, setVotes] = useState(initialVotes);

  const increaseVote = (index) => {
    const updatedVotes = [...votes];
    updatedVotes[index] += 1;
    setVotes(updatedVotes);
  };

  const decreaseVote = (index) => {
    const updatedVotes = [...votes];
    updatedVotes[index] -= 1;
    setVotes(updatedVotes);
  };

  return (
    <div>
      {loadData && <h1>Loading Questions</h1>}
      {questionsData.map(({ id, question, answer }, index) => (
        <div key={id}>
          <h1>{question}</h1>
          <button onClick={() => increaseVote(index)}>Upvote</button>
          <button onClick={() => decreaseVote(index)}>Downvote</button>{" "}
          {votes[index]}
          <br />
          <Link to={`/answer/${id}`}>Answer</Link>
        </div>
      ))}
    </div>
  );
};
