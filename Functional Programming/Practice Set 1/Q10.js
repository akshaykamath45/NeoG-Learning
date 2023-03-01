
const filterByCityAndAge=(people)=>people.filter((peoples)=>peoples.city==="Indore" && peoples.age>70)

//const filterByCityAndAge=(people)=>people.filter(({city,age})=>city==="Indore" && age>70)//Used Object Destructuring

const people = [
  { name: 'Ridhima', age: 75, city: 'Indore' },
  { name: 'Akshay', age: 60, city: 'Delhi' },
  { name: 'Udit', age: 80, city: 'Indore' },
	{ name: 'Venki', age: 80, city: 'Bangalore' }
];
const filteredPeople = filterByCityAndAge(people);
console.log(filteredPeople); 
// Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]
