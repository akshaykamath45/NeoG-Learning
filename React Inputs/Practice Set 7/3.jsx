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

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <h1>Movies</h1>
      Filter by Year:
      <select onChange={handleInput}>
        <option value="">All</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
      </select>
      {movies &&
        movies
          .filter((movie) => {
            if (userInput === "") {
              return true;
            } else {
              return movie.year.toString() === userInput;
            }
          })
          .map(({ title, year, rating }) => (
            <li key={title}>
              <p>Name: {title}</p>
              <p>Year: {year}</p>
              <p>Rating: {rating}</p>
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
            { title: "The Dark Knight", year: 2008, rating: 9.0 },
            { title: "Inception", year: 2009, rating: 8.8 },
            { title: "Interstellar", year: 2010, rating: 8.6 },
            { title: "Tenet", year: 2009, rating: 7.5 },
            { title: "Real Steal", year: 2007, rating: 7.5 },
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
