const printMultipleOfFive=(arr)=>{
    for(let i=0;i<arr.length;i++){
      if(arr[i]%5===0){
        return arr[i];
        break;//Optional here
      }
    }
  }
  console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])) // 10
  console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])) // 5