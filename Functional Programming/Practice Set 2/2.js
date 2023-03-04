const numbers = [1, 2, 3, 4];

const multiply=(num)=>num*5;

const multiplyNumber=(numbers)=>numbers.map(multiply);

const multiplyByFive=multiplyNumber(numbers);

console.log(multiplyByFive); // Output: [5, 10, 15, 20]