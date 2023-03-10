const strings = ["apple", "banana", "cherry", "date", "blueberry"];
const getString=(acc,curr)=>{
  return acc+curr.length;
}

const totalLength=(arr)=>arr.reduce(getString,0);

console.log(totalLength(strings));