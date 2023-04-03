const sumOfEvenIndices=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
      if(i%2===0){
        sum=sum+arr[i];
      }
    }
    return sum;
  }
  console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) // 6
  console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 30