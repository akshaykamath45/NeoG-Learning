const people = [
    { name: 'Raj', age: 28 },
    { name: 'Swapnil', age: 42 },
    { name: 'Anushka', age: 35 }
  ];
  
  const  newArr=(arr)=>arr.map((person)=>person.name);
  
  const names=(newArr(people));
  
  console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']
  