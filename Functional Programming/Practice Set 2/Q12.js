const bollywoodMovies = [
    { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
    { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
    { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
    { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
    { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
    { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
    { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
  ];
  
  const getMovie=({year,rating})=>year<1990 && rating>8
  
  const gettingAllMovies=(arr)=>arr.filter(getMovie);
  
  const gotMovie=gettingAllMovies(bollywoodMovies);
  
  const getTitle=({title})=>title
  
  // const getBestOldBollywoodMovies=(arr)=>arr.map(getTitle);
  
  // console.log(getBestOldBollywoodMovies(gotMovie));
  
  const getBestOldBollywoodMovies=(arr)=>{
    const newArr=arr.filter(({year,rating})=>year<1990 && rating>8);
    return newArr.map(({title})=>title)
  }
  
  const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
  console.log(bestOldMovies); // Output: ['Sholay', 'Parinda']