// Given an array of numbers, write a function that returns the sum of all the even numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// Output: 20


//Using Reduce Method
const getSum=(acc,init)=>{
  if(init%2===0){
    return acc+init;
  }
  return acc;
}

const ans=numbers.reduce(getSum,0);
console.log(ans);

//Using Filter Function

const getEvenNum=(num)=>num%2==0

const getAns=(numbers)=>numbers.filter(getEvenNum);

console.log(getAns(numbers));

//Using For Loop

// let sum=0;
// for(let i=0;i<numbers.length;i++){
//   if(numbers[i]%2==0){
//     sum=sum+numbers[i];
//   }
// }
// console.log(sum);