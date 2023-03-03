const sum=(arr)=>{
    let s=0;
    for(let i=0;i<arr.length;i++){
      s=s+arr[i];
    }
    return s
  }
  const sumFirstElement=(arr,num)=>{
    var[...rest]=arr;
    console.log(sum(rest));
    // console.log(rest);
  }
  
  console.log(sumFirstElement([1, 2, 3], 5)); // 6