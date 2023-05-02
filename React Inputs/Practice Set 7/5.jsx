import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [quote, setQuote] = useState("");

  const getData = async () => {
    const data = await fakeFetch();
    setQuote(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const generateNewQuotes = () => {
    getData();
  };

  return (
    <div>
      <p> "{quote.content}"</p>
      <p>-{quote.author}</p>
      <button onClick={generateNewQuotes}>New Quote</button>
    </div>
  );
}

export const fakeFetch = () => {
  const quotes = [
    {
      content: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      content:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein",
    },
    {
      content: "So many books, so little time.",
      author: "Frank Zappa",
    },
    {
      content: "A room without books is like a body without a soul.",
      author: "Marcus Tullius Cicero",
    },
    {
      content:
        "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      resolve(randomQuote);
    }, 1000);
  });
};
