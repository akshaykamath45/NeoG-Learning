const getValues=(arr,propertyName)=>{
    // const {name,age}=arr;
    const requiredArray=[];
    for(let i=0;i<arr.length;i++){
      if(propertyName==='name'){
      requiredArray.push(arr[i].name);
      }
      else if(propertyName==='age'){
        requiredArray.push(arr[i].age);
      }
    }
    return requiredArray;
  }
  console.log(
    getValues(
      [
        { name: 'John', age: 21 },
        { name: 'Mary', age: 22 },
        { name: 'Peter', age: 23 },
      ],
      'name',
    ),
  ) // ["John", "Mary", "Peter"]// Your ES6 code here