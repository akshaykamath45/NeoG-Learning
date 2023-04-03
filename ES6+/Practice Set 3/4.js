const pickFirstAndSecond=(arr)=>{
    let first=arr[0];
    let second=arr[1];
    const obj={first,second};
    console.log(obj)
  }
  
  console.log(pickFirstAndSecond(['orange', 'banana', 'apple']))
  // {first: 'orange', second: 'banana'}
  
  console.log(pickFirstAndSecond(['red', 'blue', 'green']))
  // {first: 'red', second: 'blue'}