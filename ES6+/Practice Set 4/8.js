const checkForTeam = (obj) => {
  const { firstName, lastName, team } = obj;

  if (team) {
    return obj;
  } else {
    let team = "A";
    let requiredObj = { ...obj, team };
    return requiredObj;
  }
};

console.log(checkForTeam({ firstName: "Penn", lastName: "Ma" }));
// {firstName: 'Penn', lastName: 'Ma', team: A}

console.log(checkForTeam({ firstName: "John", lastName: "Dee", team: "B" }));
// // {firstName: 'John', lastName: 'Dee', team: B}

console.log(checkForTeam({ firstName: "Priya", lastName: "Raj" }));
// {firstName: 'Priya', lastName: 'Raj', team: A}
