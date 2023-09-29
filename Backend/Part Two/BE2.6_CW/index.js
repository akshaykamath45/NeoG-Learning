const mongoose = require("mongoose");
const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());
require("./db");

const Movie = require("./models/movie");

//read json data
const jsonData = fs.readFileSync("movies.json", "utf8");
const moviesData = JSON.parse(jsonData);

//controllers/apis

// creating a movie API
app.get("/", (req, res) => {
  res.send("Connecting Database with API's");
});
app.post("/movies", async (req, res) => {
  try {
    const newMovie = await createMovie(req.body);
    const movieAdded = req.body;
    res.status(201).json({ message: "Movie added", movie: movieAdded });
  } catch (error) {
    res.status(404).json({ error: "Failed to Add Movie" });
  }
});

async function createMovie(movieData) {
  try {
    const newMovie = new Movie(movieData);
    const saveMovie = await newMovie.save();
    console.log(`Movie  ${newMovie.title} saved successfully`, newMovie);
  } catch (error) {
    console.log("Error adding movie", error);
  }
}

// reading a movie API
app.get("/movies/:title", async (req, res) => {
  try {
    const movie = await readMovie(req.params.title);
    console.log(req.params.title);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: "movie not found" });
    }
  } catch (error) {
    res.status(404).json({ error: "Error validating  movie" });
  }
});
async function readMovie(movieName) {
  try {
    const findMovie = await Movie.findOne({ title: movieName });
    if (findMovie) {
      console.log("Movie found");
    } else {
      console.log("Movie not found");
    }
    return findMovie;
  } catch (e) {
    console.log("Error reading movie ", e);
  }
}

//reading all movies API
app.get("/movies", async (req, res) => {
  try {
    const readMovies = await readAllMovies();
    res.json(readMovies);
  } catch (error) {
    res.status(500).json({ error: "Error fetching all movies" });
  }
});

async function readAllMovies() {
  try {
    const findAllMovies = await Movie.find({});
    console.log("Read all movies ");
    return findAllMovies;
  } catch (e) {
    console.log("Error fetching all movies ", e);
  }
}

//reading movies by a actor API
app.get("/movies/actors/:actorName", async (req, res) => {
  try {
    const findMoviesByActor = await readMoviesByActor(req.params.actorName);
    if (findMoviesByActor.length === 0) {
      res.status(404).json({
        error: `Movie not found for the actor ${req.params.actorName}`,
      });
    } else {
      res.json(findMoviesByActor);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed reading movie for the actor" });
  }
});

//filter movies based on given actor
async function readMoviesByActor(actorName) {
  try {
    const moviesByActor = await Movie.find({ actors: actorName });
    console.log(`Movies by actor  ${actorName} `, moviesByActor);
    return moviesByActor;
  } catch (e) {
    console.log(`Error reading movies by actor  ${actorName} `, e);
  }
}

//seeding database with inital values
async function seedDatabase() {
  try {
    for (const movieData of moviesData) {
      const newMovie = Movie({
        title: movieData.title,
        genre: movieData.genre,
        director: movieData.director,
        releaseYear: movieData.releaseYear,
        actors: movieData.actors,
        language: movieData.language,
        country: movieData.country,
        rating: movieData.rating,
        plot: movieData.plot,
        awards: movieData.awards,
        posterUrl: movieData.posterUrl,
        trailerUrl: movieData.trailerUrl,
      });
      await newMovie.save();
      console.log(`Movie ${newMovie.title} seeded successfully`);
    }
    console.log("Database seeded succesfully");
  } catch (e) {
    console.log("Error seeding database ", e);
  } finally {
    mongoose.disconnect();
  }
}
// seedDatabase();

async function readMoviesByDirector(directorName) {
  try {
    const moviesByDirector = await Movie.find({ director: directorName });
    console.log(`Movies by director ${directorName}`, moviesByDirector);
  } catch (e) {
    console.log(`Error reading movies by director  ${directorName}`, e);
  }
}
// readMoviesByDirector("Rajkumar Hirani")

//read all movies for a given year and genre
async function readMoviesByYear(movieYear) {
  try {
    const moviesByYear = await Movie.find({ releaseYear: movieYear });
    console.log(`Movies in year ${movieYear} `, moviesByYear);
  } catch (e) {
    console.log("Error reading movies by year ", e);
  }
}
// readMoviesByYear(2001)

async function readMoviesByGenre(movieGenre) {
  try {
    const moviesByGenre = await Movie.find({ genre: movieGenre });
    console.log(`Movie by genre ${movieGenre} `, moviesByGenre);
  } catch (e) {
    console.log("Error reading movies by genre ", e);
  }
}
// readMoviesByGenre("Drama");

//update
async function updateMovieById(movieId, updateData) {
  try {
    const updateMovie = await Movie.findByIdAndUpdate(
      movieId,
      updateData,
      { new: true },
      { runValidators: true }
    );
    //Movie.findOneAndUpdate({title:title},updateData,{new:true}),if we need to change the id
    if (updateMovie) {
      console.log("Updated Movie ", updateMovie);
    }
  } catch (e) {
    console.log("Error updating movie : ", e);
  }
}

// updateMovieById("650612ea7add67374607a797",{rating:7.2})

//delete
async function deleteMovieById(movieId) {
  try {
    const deleteMovie = await Movie.findByIdAndDelete(movieId);
    if (deleteMovie) {
      console.log("Deleted  Movie ", deleteMovie);
    }
  } catch (e) {
    console.log("Error deleting movie ", e);
  }
}
// deleteMovieById("650612e97add67374607a782")

//sorting
async function sortMoviesByRatings() {
  try {
    const sortMovie = await Movie.find({}).sort({ rating: 1 });
    console.log("Sorted Movies by Rating ", sortMovie);
  } catch (e) {
    console.log("Error sorting movies by rating ", e);
  }
}
// sortMoviesByRatings();

async function sortMoviesByYear() {
  //1 for ascending ,2 for descending
  try {
    const sortMovies = await Movie.find({}).sort({ releaseYear: -1 });
    console.log("Sorted Movies by Release Years ", sortMovies);
  } catch (e) {
    console.log("Error sorting movies ", e);
  }
}
// sortMoviesByYear();

//deleting all movies
// async function deleteAllMovies() {
//   try {
//     const deletedMovies = await Movie.deleteMany({}); // Deletes all documents in the Movie collection
//     console.log(`Deleted ${deletedMovies.deletedCount} movies.`);
//   } catch (error) {
//     console.error("Error deleting movies:", error);
//   }
// }

// deleteAllMovies();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
