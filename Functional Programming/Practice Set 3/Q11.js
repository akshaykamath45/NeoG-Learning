const numbers = [12, 23, 4, 2, 11, 21] 

const getEven=(acc,curr)=>{
  if(curr%2===0){
    return acc+curr;
  }
  return acc;
}

const sumOfEvenNumbers=(arr)=>arr.reduce(getEven,0);


console.log(sumOfEvenNumbers(numbers))
// Output: 18