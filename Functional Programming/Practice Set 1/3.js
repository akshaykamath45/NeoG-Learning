const findAge=(obj)=>obj.age;

const getAges=(people)=>people.map(findAge);

const people = [
  { name: 'Ankit', age: 25 },
  { name: 'Vinit', age: 24 },
  { name: 'Shashi', age: 29 }
];
const ages = getAges(people);
console.log(ages); // Output: [25, 24, 29]