const numbers = [10, 5, 8, 3, 6];

const getMinNumber=(acc,curr)=>{
  if(curr<acc){
    acc=curr;
  }
  return acc;
}

const getMinimumNumber=(arr)=>arr.reduce(getMinNumber,Infinity);

console.log(getMinimumNumber(numbers)); 
// Output: 3