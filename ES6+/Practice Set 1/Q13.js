const person = { name: 'Amit', age: 25, occupation: 'Software Engineer' }

const changeOccupation = (person, newOccupation) => person.occupation = newOccupation

console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
changeOccupation(person, 'Product Manager');
console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console