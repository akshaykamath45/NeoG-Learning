const book = {
    name: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    price: 500
  }
  
  const changePrice=(book,newPrice)=>{
    book.price=newPrice;
  }
  
  //Original Price of the Book
  console.log(book);
  
  changePrice(book,450);
  
  //Updated Price of the Book
  console.log(book);
  