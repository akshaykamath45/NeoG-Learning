import { useState } from "react";

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
  },
  {
    id: 3,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Classic",
  },
  { id: 4, title: "1984", author: "George Orwell", genre: "Dystopian" },
  {
    id: 5,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
  },
  {
    id: 6,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Young Adult",
  },
  {
    id: 7,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Young Adult",
  },
];

function BookInformation({ books }) {
  const [display, setDisplay] = useState(null);
  function showAllGenres() {
    setDisplay(
      <div>
        {books.map(({ id, title, author, genre }) => (
          <li key={id} style={{ listStyle: "none" }}>
            <h1>{title}</h1>
            <p>{author}</p>
          </li>
        ))}
      </div>
    );
  }
  function showClassics() {
    setDisplay(
      <div>
        {books
          .filter(({ genre }) => genre === "Classic")
          .map(({ id, title, author, genre }) => (
            <li key={id} style={{ listStyle: "none" }}>
              <h1>{title}</h1>
              <p>{author}</p>
            </li>
          ))}
      </div>
    );
  }
  function showDystopian() {
    setDisplay(
      <div>
        {books
          .filter(({ genre }) => genre === "Dystopian")
          .map(({ id, title, author, genre }) => (
            <li key={id} style={{ listStyle: "none" }}>
              <h1>{title}</h1>
              <p>{author}</p>
            </li>
          ))}
      </div>
    );
  }
  function showYoungAdult() {
    setDisplay(
      <div>
        {books
          .filter(({ genre }) => genre === "Young Adult")
          .map(({ id, title, author, genre }) => (
            <li key={id} style={{ listStyle: "none" }}>
              <h1>{title}</h1>
              <p>{author}</p>
            </li>
          ))}
      </div>
    );
  }

  return (
    <div>
      <button onClick={showAllGenres}>All Genres</button>
      <button onClick={showClassics}>Classics</button>
      <button onClick={showDystopian}>Dystopian</button>
      <button onClick={showYoungAdult}>Young Adult</button>
      {display}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <BookInformation books={books} />
    </div>
  );
}
