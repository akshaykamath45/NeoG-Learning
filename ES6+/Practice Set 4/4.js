const filterWords=(arr)=>{
    const requiredArray=[];
      for(let i=0;i<arr.length;i++){
          if(arr[i].length>5){
              requiredArray.push(arr[i]);
          }
      }
    return requiredArray;
  }
  
  var words = ['eat', 'sleep', 'code', 'repeat', 'neog', 'community']
  console.log(filterWords(words)) // ["repeat", "community"]