const findPerson=(arr,name)=>{
    var[...rest]=arr;
    let count=0;
    for(let i=0;i<arr.length;i++){
    if(rest[i].name==name){
      console.log(rest[i]);
      break;
    }
      else{
        console.log("null")
      }
    }    
  
  }
  
  
  console.log(findPerson([{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 }], "Akhil"))