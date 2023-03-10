const numbers = [1, 2, 3, 4, 5];

const product=(arr)=>arr.reduce((acc,curr)=>acc*curr,1);

console.log(product(numbers));
// Output: 120