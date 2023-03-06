const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
  ];
  
  const findBookWithMoreThan500Pages=(arr)=>arr.find(({pageCount})=>pageCount>500);
  
  const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books);
  console.log(bookWithMoreThan500Pages); 
  // Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }