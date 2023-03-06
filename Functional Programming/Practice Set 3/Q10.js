const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
  ];
  
  const getTitle=({title,pageCount})=>{
    if(pageCount>700){
      return title;
    }
  }
  const getTitlesWithMoreThan700Pages=(arr)=>arr.filter(getTitle).map(({title})=>title);
  
  const booksWithMoreThan700Pages = getTitlesWithMoreThan700Pages(books);
  console.log(booksWithMoreThan700Pages); 
  // Output: ["The Lord of the Rings"]