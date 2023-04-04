const getBookInfo = (obj) => {
  const { title, author } = obj;
  return `${title} by ${author}`;
};

const book = { title: "The Hobbit", author: "J.R.R. Tolkien" };
console.log(getBookInfo(book)); // The Hobbit by J.R.R. Tolkien
