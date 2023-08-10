export const Favourites = ({ books, setBooks }) => {
  const favouriteBooks = books.filter((book) => book.favourite);
  const removeFromFavourites = (book) => {
    const removeFavouriteBook = books.map((selectedBook) =>
      selectedBook.id === book.id
        ? { ...selectedBook, favourite: false }
        : selectedBook
    );
    setBooks(removeFavouriteBook);
  };
  return (
    <div>
      <h1>Favourites</h1>
      {favouriteBooks.length === 0 && (
        <h2>No books in the favourites section ):</h2>
      )}
      <div className="books-list">
        {favouriteBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt="book-img" className="book-image"></img>
            <p>{book.id}</p>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <button onClick={() => removeFromFavourites(book)}>
              Remove from Favourites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
