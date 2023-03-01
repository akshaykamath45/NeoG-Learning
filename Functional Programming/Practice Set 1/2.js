const convertToUpperCase=(str)=>str.toUpperCase();

const capitalizeArray=(strArray)=>strArray.map(convertToUpperCase);

const myArray = ['apple', 'banana', 'cherry'];
console.log(capitalizeArray(myArray));
// Output: ["APPLE", "BANANA", "CHERRY"]