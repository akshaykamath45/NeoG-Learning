const games = [
    {title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"},
    {title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action"},
    {title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle"},
    {title: "The Legend of Zelda: Breath of the Wild", developer: "Nintendo", genre: "Adventure"}
  ];
  
  const filterByGenre=(arr,reqGenre)=>arr.filter(({genre})=>genre===reqGenre);
  
  const filteredGames = filterByGenre(games, "RPG");
  console.log(filteredGames);
  // Output: [{title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"}]