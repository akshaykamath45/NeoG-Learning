const getAverageAge = (people) => {
    const sumOfAges = people.reduce((acc, { age }) => acc + age, 0);
    const averageAge = sumOfAges / people.length;
    return { averageAge };
  };
  
  const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
  ];
  
  console.log(getAverageAge(people));
  // Output: { averageAge: 32.5 }