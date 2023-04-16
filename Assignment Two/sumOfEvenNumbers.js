// 5. Write an ES6 function that takes in an array of numbers and returns the sum of all the even numbers. Use the nullish coalescing operator to handle undefined or null values.

export const sumOfEvenNumbers = (arr) => {
  return arr.reduce((acc, curr) => {
    const num = curr ?? 0; //if the left operand is null or operand,it would return the right operand
    return num % 2 === 0 ? acc + num : acc;
  }, 0);
};

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumOfEvenNumbers([1, 3, 5])); // 0
