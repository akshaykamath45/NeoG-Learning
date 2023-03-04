const numbers = [1, 2, 3, 21, 14, 7];

const isDivisible=(numbers)=>numbers.find((num)=>num%7==0);

const isDivisibleBy7=isDivisible(numbers);

console.log(isDivisibleBy7)
// Output: 21