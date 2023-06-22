import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h1>Welcome John</h1>
      <Link to="/questions">Show questions list</Link>
    </div>
  );
};
