import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [userInput, setUserInput] = useState("");
  const getMovieData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/movies"
      );
      if (status === 200) {
        setMovies(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <h1>Movies</h1>
      Filter by Genre:
      <select onChange={handleUserInput}>
        {/* Using By Default Values */}
        <option value="">All</option>
        <option>Comedy</option>
        <option>Science Fiction</option>
        <option>Action</option>
        <option>Crime</option>
        <option>Drama</option>
      </select>
      {movies
        .filter((movie) => {
          if (userInput === "") {
            return true;
          } else {
            return movie.genre === userInput;
          }
        })
        .map(({ title, year, genre }) => (
          <li key={title}>
            <p>{title}</p>
            <p>{year}</p>
            <p>{genre}</p>
          </li>
        ))}
    </div>
  );
}

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/movies") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            {
              title: "The Godfather",
              year: 1972,
              genre: "Crime",
            },
            {
              title: "The Shawshank Redemption",
              year: 1994,
              genre: "Drama",
            },
            {
              title: "The Dark Knight",
              year: 2008,
              genre: "Action",
            },
            {
              title: "Forrest Gump",
              year: 1994,
              genre: "Comedy",
            },
            {
              title: "The Matrix",
              year: 1999,
              genre: "Science Fiction",
            },
            {
              title: "Jurassic Park",
              year: 1993,
              genre: "Science Fiction",
            },
            {
              title: "Star Wars: Episode IV - A New Hope",
              year: 1977,
              genre: "Science Fiction",
            },
            {
              title: "The Terminator",
              year: 1984,
              genre: "Action",
            },
            {
              title: "Die Hard",
              year: 1988,
              genre: "Action",
            },
            {
              title: "Pulp Fiction",
              year: 1994,
              genre: "Crime",
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Movies list not found.",
        });
      }
    }, 2000);
  });
};
