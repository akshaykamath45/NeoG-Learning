export const Read = ({ books, setBooks }) => {
  const readBooks = books.filter((book) => book.read);
  const removeFromRead = (book) => {
    const removeReadBooks = books.map((selectedBook) =>
      selectedBook.id === book.id
        ? { ...selectedBook, read: false }
        : selectedBook
    );
    setBooks(removeReadBooks);
  };
  return (
    <div>
      <h1>Read Books</h1>
      {readBooks.length === 0 && <h2>No books in the read section ):</h2>}
      <div className="books-list">
        {readBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt="book-img" className="book-image"></img>
            <p>{book.id}</p>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <button onClick={() => removeFromRead(book)}>
              Remove from Read
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
