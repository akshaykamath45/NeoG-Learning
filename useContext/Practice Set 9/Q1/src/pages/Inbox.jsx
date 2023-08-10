import { MailContext } from "../context/MailContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
export const Inbox = () => {
  const { emails, setEmails, isLoading } = useContext(MailContext);
  console.log(emails);

  const handleMarkAsRead = (email) => {
    // setEmails((email) => email.read === true);
    // const selectedEmail = emails.find((mail) => mail.id === email.id);
    // console.log(selectedEmail);
    // const updateSelectedEmail = { ...selectedEmail, read: true };
    // setEmails([emails, ...updateSelectedEmail]);
    console.log(email);
    const updateEmail = emails.map((mail) =>
      mail.id === email.id ? { ...mail, read: true } : mail
    );
    setEmails(updateEmail);
  };

  const readEmails = emails.filter((email) => email.read);
  const unreadEmails = emails.filter((email) => !email.read);

  return (
    <div>
      <h1>Inbox Page</h1>
      {isLoading && <h2>Loading Emails...</h2>}
      <p>Unread Emails : {unreadEmails.length}</p>
      <p>Read Emails: {readEmails.length}</p>
      {emails.map((email) => (
        <li>
          <Link to={`/mail/${email.id}`}>
            <p>{email.subject}</p>
          </Link>
          {!email.read && (
            <button onClick={() => handleMarkAsRead(email)}>
              Mark as Read
            </button>
          )}
        </li>
      ))}
    </div>
  );
};
