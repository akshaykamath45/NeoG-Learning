const products = [
    { name: 'Shirt', price: 20, quantity: 2 },
    { name: 'Pants', price: 30, quantity: 1 },
    { name: 'Shoes', price: 50, quantity: 1 },
    { name: 'Hat', price: 10, quantity: 3 },
  ];
  
  const getCost=(acc,{price,quantity})=>{
    return acc+price*quantity;
  }
  
  const getTotalCost=(arr)=>arr.reduce(getCost,0);
  
  console.log(getTotalCost(products)); 
  // Output: 150