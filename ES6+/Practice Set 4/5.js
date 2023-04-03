const capitalizeWords=(arr)=>{
    const requiredArray=[];
    for(let i=0;i<arr.length;i++){
      requiredArray.push(arr[i].toUpperCase());
    }
    return requiredArray;
  }
  
  console.log(capitalizeWords(['eat', 'sleep', 'code', 'repeat']))
  // ["EAT", "SLEEP", "CODE", "REPEAT"]