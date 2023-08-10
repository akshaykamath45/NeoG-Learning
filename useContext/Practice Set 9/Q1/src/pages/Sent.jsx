import { Link } from "react-router-dom";
export const Sent = ({ sentEmails }) => {
  return (
    <div>
      <h1>Sent</h1>
      {sentEmails.map((sentEmail) => (
        <li>
          <Link to={`/mail/${sentEmail.id}`}>
            <p>{sentEmail.subject}</p>
          </Link>
        </li>
      ))}
    </div>
  );
};
