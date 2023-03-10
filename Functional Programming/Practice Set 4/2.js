const numbers = [1, 2, 3, 4, 5];

const getSquares=(acc,curr)=>{
  return acc+Math.pow(curr,2);
  //return acc+curr*curr;
}

const sumSquares=(arr)=>arr.reduce(getSquares,0);


console.log(sumSquares(numbers));
 // Output: 55 