const getMaxElement=(arr)=>{
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
          max=arr[i];
        }
    }
    return max;
  }
  
  let array = [4,78,8,3,6,0,12,34]
  console.log(getMaxElement(array)) // 78