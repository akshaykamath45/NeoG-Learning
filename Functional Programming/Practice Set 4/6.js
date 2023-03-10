const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];

const getString=(acc,curr)=>{
  if(curr.length>acc.length){
    acc=curr;
  }
  return acc;
}
const longestString=(arr)=>arr.reduce(getString,'');

//const longestString=(arr)=>arr.reduce((acc,curr)=>curr.length>acc.length ? acc=curr : acc,'');

console.log(longestString(strings)); 
// Output: 'Haule Haule'