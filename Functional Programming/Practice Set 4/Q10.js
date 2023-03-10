const countStrings = (arr) => {
    return arr.reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr]++;
      }else {
        acc[curr] = 1;
      } 
      return acc;
    }, {});
  };
  
  const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];
  console.log(countStrings(fruits));
  // Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }
  