const cars = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2018 },
  ];
  
  const getCar=(obj)=>{
    if(obj.year>2012){
      return obj;
    }
  }
  
  const getCarModel=(arr)=>arr.filter(getCar).map(({model})=>model);
  
  const carModels = getCarModel(cars);
  console.log(carModels);
  // Output: ["Camry", "Mustang"]