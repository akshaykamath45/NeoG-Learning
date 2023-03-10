const items = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
    { name: "Item 3", price: 30 }
  ];
  
  const getItemPrice=(acc,{price})=>{
    return acc+price;
  }
  
  const totalValue=(arr)=>arr.reduce(getItemPrice,0);
  
  console.log(totalValue(items)); 
  // Output: 60