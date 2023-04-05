import { useState } from "react";
import React from "react";

const characters = {
  heroes: [
    {
      name: "IRON MAN",
      powers: "Genius,Rich,IRON Suit",
      costume: "IRON MAN suit"
    },
    {
      name: "ANT MAN",
      powers: "Ant man suit",
      costume: "Ant man suit"
    },
    {
      name: "Spider-man",
      powers: "Reflexes,Speed,Spider-Sense",
      costume: "Spider Suit"
    },
    {
      name: "Bat man",
      powers: "Rich,Bat suit",
      costume: "Bat Suit"
    },
    {
      name: "Super-man",
      powers: "Superhuman strength,Reflexes,Speed",
      costume: "Superman  Suit"
    }
  ],
  villains: [
    {
      name: "Thanos",
      powers: "Superhuman strength,Reflexes,Speed,",
      costume: "Metal armor"
    },
    {
      name: "Venom",
      powers: "shapeshifting and camouflage Symbiotes autonomous defense",
      costume: "black suit"
    },
    {
      name: "Kang the conqueror",
      powers: "time travel, can access all tech",
      costume: "kang armor"
    },
    {
      name: "Joker",
      powers: "clownlike appearance and sick humour",
      costume: "Joker costume"
    }
  ]
};

function Tab({ objectInformation }) {
  const [display, setDisplay] = useState(null);

  function displayHeroes() {
    setDisplay(
      <ol>
        {objectInformation.heroes.map(({ name, powers, costume }) => (
          <li>
            <h1>{name}</h1>
            <p> Powers : {powers} </p>
            <p> Costume : {costume} </p>
          </li>
        ))}
      </ol>
    );
  }
  function displayVillains() {
    setDisplay(
      <ol>
        {objectInformation.villains.map(({ name, powers, costume }) => (
          <li>
            <h1>{name}</h1>
            <p> Powers : {powers} </p>
            <p> Costume : {costume} </p>
          </li>
        ))}
      </ol>
    );
  }
  return (
    <div>
      <button onClick={displayHeroes}>Show Heroes </button>
      <button onClick={displayVillains}>Show Villains</button>
      {display}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Tab objectInformation={characters} />
    </div>
  );
}
