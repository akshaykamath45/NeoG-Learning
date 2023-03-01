const strLengthGreaterThan5=(str)=>str.length>5;

const filterLongStrings=(string)=>string.filter(strLengthGreaterThan5);

const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple'];
console.log(filterLongStrings(fruits)); 
// Output: ["banana", "cherry", "watermelon", "pineapple"]