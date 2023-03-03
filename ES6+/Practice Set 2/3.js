const isEligible=(person,num)=>(person.age+num)>21 ? "true" : "false"


const person1 = { name: 'Ajay', age: 20 };
console.log(isEligible(person1, 1)); // false
console.log(isEligible(person1, 2)); // true