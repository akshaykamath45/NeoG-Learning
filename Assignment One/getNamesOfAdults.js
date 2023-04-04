const getNamesOfAdults = (arr) => {
    // const {name,age}=arr;
    const requiredArray=[];
    for(let i=0;i<arr.length;i++){
      if(arr[i].age>60){
        requiredArray.push(arr[i].name);
      }
    }
    return requiredArray;
  };
  
  const people = [
    { name: "Alice", age: 69 },
    { name: "Bob", age: 47 },
    { name: "Charlie", age: 70 }
  ];
  console.log(getNamesOfAdults(people)); // ["Alice", "Charlie"]