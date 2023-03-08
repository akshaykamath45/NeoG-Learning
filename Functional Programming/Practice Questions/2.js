const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 70 },
    { name: 'Charlie', grade: 90 },
    { name: 'Dave', grade: 80 }
  ];
  
  const getGrade=(acc,{grade})=>{
    if(grade>acc){
      return acc;
    }
   
  }
  
  const getStudent=(arr)=>arr.reduce(getGrade,{ });
  
  console.log(getStudent(getGrade));