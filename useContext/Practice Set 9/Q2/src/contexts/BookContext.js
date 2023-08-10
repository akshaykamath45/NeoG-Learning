import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../data/fakeFetch";
export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    try {
      const { data, status } = await fakeFetch("https://example.com/api/books");
      if (status === 200) {
        setBooks(data.books);
        setUser(data.user);
      }
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleAddToFavourites = (book) => {
    const addToFavourite = books.map((selectedBook) =>
      selectedBook.id === book.id
        ? { ...selectedBook, favourite: true }
        : selectedBook
    );
    setBooks(addToFavourite);
  };
  return (
    <BookContext.Provider
      value={{ books, setBooks, handleAddToFavourites, user, isLoading }}
    >
      {children}
    </BookContext.Provider>
  );
};
