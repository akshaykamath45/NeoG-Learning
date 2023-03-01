const increase=(num)=>num+3;

const incrementNumbers=(numbers)=>numbers.map(increase);

const numbers = [1, 2, 3, 4, 5];
console.log(incrementNumbers(numbers));
// Output: [4, 5, 6, 7, 8]