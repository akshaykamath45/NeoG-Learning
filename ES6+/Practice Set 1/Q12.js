const book={
    title:"Rich Dad Poor Dad",
    author:"Robert Kiyosaki",
    pages:"336"
  }

function getBookDetails(book){
  if(book.pages>=100){
    console.log("true");
  }
  else{
    console.log("false");
  }
}

console.log(getBookDetails(book)) // logs 'true' if the pages are above 100
//console.log(getBookDetails(book)) // logs 'false' if the pages are 100 or below