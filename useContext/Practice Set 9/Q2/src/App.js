import "./styles.css";
import { Favourites } from "./pages/Favourites";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Read } from "./pages/Read";
import { Routes, Route, NavLink } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from "./contexts/BookContext";
export default function App() {
  const {
    books,
    setBooks,
    handleAddToFavourites,
    user,
    isLoading
  } = useContext(BookContext);
  const readBooks = books.filter((book) => book.read);
  const favouriteBooks = books.filter((book) => book.favourite);
  return (
    <div className="App">
      <nav>
        <NavLink to="/">All books</NavLink> ||
        <NavLink to="favourites">
          Favourites {favouriteBooks.length > 0 && favouriteBooks.length}
        </NavLink>{" "}
        ||
        <NavLink to="read">
          Read {readBooks.length > 0 && readBooks.length}
        </NavLink>{" "}
        ||
        <NavLink to="profile">Profile</NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              books={books}
              setBooks={setBooks}
              handleAddToFavourites={handleAddToFavourites}
              loading={isLoading}
            />
          }
        />
        <Route
          path="/favourites"
          element={<Favourites books={books} setBooks={setBooks} />}
        />
        <Route
          path="/read"
          element={<Read books={books} setBooks={setBooks} />}
        />
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </div>
  );
}
