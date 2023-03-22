
const movie={
    name:"Life of Pi",
    director:"Aamir Khan",
    rating:"4.5"
  }
  
  const getMovieDetails=({rating})=>rating>4;//Used Object Destructuring
  
  console.log(getMovieDetails(movie));

  /* const returnMovieDetails=(movie)=>movie.rating>4?movie:"movie rating less than 4";

console.log(returnMovieDetails(movie));*/