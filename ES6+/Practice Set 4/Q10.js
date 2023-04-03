const sumOfAges=(arr)=>{
    let sum=0;
    const newArr=[];
    for(let i=0;i<arr.length;i++){
      newArr.push(arr[i].age);
    }
    for(let i=0;i<newArr.length;i++){
      sum=sum+newArr[i];
    }
    return sum;
    
  }
  
  
  var array = [
      {
        name: 'Jay',
        age: 60,
      },
      {
        name: 'Gloria',
        age: 36,
      },
      {
        name: 'Manny',
        age: 16,
      },
      {
        name: 'Joe',
        age: 9,
      },
    ]
    
    console.log(sumOfAges(array)) // 121