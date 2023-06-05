import "./styles.css";
import { useState } from "react";
export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  return (
    <>
      <h2>Let’s check you in</h2>
      <label className="inputfield">
        First name: <input onChange={handleFirstName} />
      </label>
      <label className="inputfield">
        Last name: <input onChange={handleLastName} />
      </label>
      <p>
        You will be checked in with the name: {firstName} {lastName}
        <b></b>
      </p>
    </>
  );
}