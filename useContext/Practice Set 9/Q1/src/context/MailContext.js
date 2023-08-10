import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../data/fakeFetch";
export const MailContext = createContext();

export const MailProvider = ({ children }) => {
  const [emails, setEmails] = useState([]);
  const [sentEmails, setSentEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/allemails"
      );
      if (status === 200) {
        setEmails(data.emails);
        setSentEmails(data.sentEmails);
      }
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <MailContext.Provider
      value={{ emails, setEmails, isLoading, sentEmails, setSentEmails }}
    >
      {children}
    </MailContext.Provider>
  );
};
