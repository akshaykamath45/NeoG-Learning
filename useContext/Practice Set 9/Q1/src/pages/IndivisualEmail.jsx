import { useParams } from "react-router-dom";
export const IndivisualEmail = ({ emails, sentEmails }) => {
  const { mailId } = useParams();
  const selectedEmail = emails.find(
    (email) => email.id === parseInt(mailId, 10)
  );
  const selectSentEmail = sentEmails.find(
    (sentEmail) => sentEmail.id === parseInt(mailId, 10)
  );

  console.log(selectedEmail);
  console.log(selectSentEmail);
  return (
    <div>
      {selectedEmail && (
        <div>
          <h2>{selectedEmail.subject}</h2>
          <p>From: {selectedEmail.sender}</p>
          <p>Message: {selectedEmail.message}</p>
        </div>
      )}
      {selectSentEmail && (
        <>
          <h2>{selectSentEmail.subject}</h2>
          <p>To: {selectSentEmail.to}</p>
          <p>Message: {selectSentEmail.message}</p>
        </>
      )}
    </div>
  );
};
