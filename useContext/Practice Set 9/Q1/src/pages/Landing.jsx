import { Link } from "react-router-dom";
export const Landing = () => {
  return (
    <div>
      <h1>My Mail Box</h1>
      <li>
        <Link to="/inbox">Inbox</Link>
      </li>
      <li>
        <Link to="/sent">Sent</Link>
      </li>
    </div>
  );
};
