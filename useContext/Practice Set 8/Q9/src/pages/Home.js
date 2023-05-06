import { Link } from "react-router-dom";
export const Home = ({ questionsData, loadData }) => {
  return (
    <>
      <h1>Welcome John</h1>
      <Link to="/questions">Show questions list</Link>
    </>
  );
};
