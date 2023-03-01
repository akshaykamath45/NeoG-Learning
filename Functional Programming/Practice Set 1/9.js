const filterByScore=(students)=>students.filter(({name,score})=>score>80);//Used Object Destructuring

const students = [
  { name: 'Aditya', score: 85 },
  { name: 'Bob', score: 75 },
  { name: 'Charlie', score: 90 }
];

console.log(filterByScore(students)); 
// Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]