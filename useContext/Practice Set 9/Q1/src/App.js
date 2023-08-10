import "./styles.css";
import { Inbox } from "./pages/Inbox";
import { IndivisualEmail } from "./pages/IndivisualEmail";
import { Landing } from "./pages/Landing";
import { Sent } from "./pages/Sent";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { MailContext } from "./context/MailContext";
export default function App() {
  const { emails, sentEmails } = useContext(MailContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sent" element={<Sent sentEmails={sentEmails} />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route
          path="/mail/:mailId"
          element={<IndivisualEmail emails={emails} sentEmails={sentEmails} />}
        />
      </Routes>
    </div>
  );
}
