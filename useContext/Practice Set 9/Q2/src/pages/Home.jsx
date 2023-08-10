import { useNavigate } from "react-router-dom";
import "./Home.css";
export const Home = ({ books, setBooks, handleAddToFavourites, loading }) => {
  const handleBookRead = (book) => {
    const markBookAsRead = books.map((selectedBook) =>
      selectedBook.id === book.id
        ? { ...selectedBook, read: true }
        : selectedBook
    );
    setBooks(markBookAsRead);
  };
  const navigate = useNavigate();
  return (
    <div>
      <h1>All Books</h1>
      {loading && <h2>Loading Books</h2>}
      <div className="books-list">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt="book-img" className="book-image"></img>
            <p>{book.id}</p>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <button disabled={book.read} onClick={() => handleBookRead(book)}>
              {!book.read ? "Mark as Read" : "Already Read"}
            </button>
            {book.favourite ? (
              <button onClick={() => navigate("/favourites")}>
                Go to Favourite
              </button>
            ) : (
              <button onClick={() => handleAddToFavourites(book)}>
                Add to Favourites
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
