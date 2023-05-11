import React, { useState, useEffect } from "react";
import { fakeFetch } from "./fakeFetch";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const getMoviesData = async () => {
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

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <div>
      <label>
        Category Filter:
        <input
          type="radio"
          name="category"
          value=""
          checked={selectedCategory === ""}
          onChange={handleCategoryChange}
        />
        All
        <input
          type="radio"
          name="category"
          value="Action"
          checked={selectedCategory === "Action"}
          onChange={handleCategoryChange}
        />
        Action
        <input
          type="radio"
          name="category"
          value="Crime"
          checked={selectedCategory === "Crime"}
          onChange={handleCategoryChange}
        />
        Crime
        <input
          type="radio"
          name="category"
          value="Drama"
          checked={selectedCategory === "Drama"}
          onChange={handleCategoryChange}
        />
        Drama
      </label>
      <br />
      Rating Filter:
      <select onChange={handleUserInput}>
        <option value="">All</option>
        <option value="8.0">8.0+</option>
        <option value="8.5">8.5+</option>
        <option value="9.0">9.0+</option>
        <option value="9.5">9.5+</option>
      </select>
      <h1>Movies List</h1>
      <ul>
        {movies
          .filter((movie) => {
            const ratingCondition =
              userInput === "" ||
              parseFloat(movie.rating) >= parseFloat(userInput);
            const categoryCondition =
              selectedCategory === "" || movie.category === selectedCategory;
            return ratingCondition && categoryCondition;
          })
          .map(({ id, title, rating, year }) => (
            <li key={id} style={{ listStyle: "none" }}>
              <h2>{title}</h2>
              <p>
                Rating: {rating} - Year: {year}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};
