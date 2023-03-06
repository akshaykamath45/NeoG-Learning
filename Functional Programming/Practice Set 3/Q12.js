const students = [
    { name: 'John', score: 80 },
    { name: 'Jane', score: 90 },
    { name: 'Bob', score: 75 },
    { name: 'Alice', score: 85 },
  ];
  
  const getAverage=(acc,{score})=>{
    return acc+score;
  }
  
  const getAverageScore=(arr)=>arr.reduce(getAverage,0)/arr.length;
  
  console.log(getAverageScore(students)); 
  // Output: 82.5