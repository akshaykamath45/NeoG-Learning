import { useState } from "react";
function GameCounter({ currentLivesSet }) {
  const [currentLives, setCurrentLives] = useState(currentLivesSet);
  function decreaseCurrentLives() {
    setCurrentLives(currentLives - 1);
    if (currentLives === 0) {
      setCurrentLives(0);
    }
  }
  return (
    <div>
      <h1>Current Lives : {currentLives} </h1>
      <button onClick={decreaseCurrentLives}>Lose a Life</button>
      {currentLives === 0 ? <h2>Game Over</h2> : " "}
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <GameCounter currentLivesSet={10} />
    </div>
  );
}
