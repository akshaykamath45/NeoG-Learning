import "./styles.css";
import { useState } from "react";
export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <>
      <h2>Let’s check you in</h2>
      <label className="inputfield">
        First name:{" "}
        <input onChange={(events) => setFirstName(events.target.value)} />
      </label>
      <label className="inputfield">
        Last name:{" "}
        <input onChange={(events) => setLastName(events.target.value)} />
      </label>
      <p>
        You will be checked in with the name:{" "}
        <b>
          {firstName} {lastName}
        </b>
      </p>
    </>
  );
}
