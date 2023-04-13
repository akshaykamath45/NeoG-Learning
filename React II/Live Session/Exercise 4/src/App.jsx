import React from "react";
import { fakeFetch } from "./api/fakefetch";
import "./styles.css";
import { useState } from "react";
export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [highlight, setHighlight] = useState(false);
  const handleData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/transactions"
      );
      if (status === 200) {
        console.log({ data: data.transactions });
        setTransactions(data.transactions);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const highlightData = () => {
    setHighlight(true);
  };
  return (
    <div className="App">
      <div className="App">
        <h1>My Transactions</h1>
      </div>
      <button onClick={handleData}>get transactions details</button>
      <button onClick={highlightData}>
        highlight transactions greater than 1000
      </button>
      {transactions.map(({ id, amount, date, gateway }) => (
        <li
          style={{
            border: highlight && amount > 1000 ? "4px solid orange" : " ",
            padding: "4px",
            listStyle: "none",
          }}
          key={id}
        >
          <h3>Amount : {amount}</h3>
          <p>Date : {date}</p>
          <p>Gateway : {gateway}</p>
        </li>
      ))}
    </div>
  );
}
