const strings = ['Hello', ' ', 'world', '!'];

const getString=(acc,str)=>{
  return acc+str;
}

const concatenateStrings=(arr)=>arr.reduce(getString,"");

console.log(concatenateStrings(strings)); 
// Output: "Hello world!"