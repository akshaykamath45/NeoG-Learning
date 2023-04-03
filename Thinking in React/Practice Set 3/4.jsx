const cartoons = [
    {
        id: 1,
        name: 'Mickey Mouse',
        superpower: 'Invisibility',
        magnitude: 1
      },
      {
        id: 2,
        name: 'Spongebob Squarepants',
        superpower: 'Super Strength',
        magnitude: 3
      },
      {
        id: 3,
        name: 'Bugs Bunny',
        superpower: 'Teleportation',
        magnitude: 9
      },
      {
        id: 4,
        name: 'Tom and Jerry',
        superpower: 'Intelligence',
        magnitude: 8
      },
      {
        id: 5,
        name: 'The Powerpuff Girls',
        superpower: 'Flight',
        magnitude: 10
      }
    ]

function CharacterDetails({ character,superPower}) {
    return (
      <div>
        <ol>
          {character.map(({ id, name, superpower, magnitude }) =>
           superPower===superpower ? (
              <li key={id}>
                Name : {name} -- Superpower : {superpower} -- Magnitude : {magnitude}
              </li>
            ) : (
              " "
            )
          )}
        </ol>
      </div>
    );
  }

  export default function App() {
    return (
      <div className="App">
        <CharacterDetails character={cartoons} superPower="Intelligence"/>
      </div>
    );
  }