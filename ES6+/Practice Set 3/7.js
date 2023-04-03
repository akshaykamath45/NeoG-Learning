const printLastFive=(arr)=>{
    let arr2=[];
    for(let i=arr.length-5;i<arr.length;i++){
     arr2.push(arr[i]);
    }
    console.log(arr2);
  }
  
  console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]))
  // [1, 2, 3, 5, 8]