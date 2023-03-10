const findMostExpensiveProduct = (products) => {
    return products.reduce((acc, curr) => curr.price > acc.price ? curr : acc);
  };
  
  const products = [
    { name: "Bread", price: 10, quantity: 2 },
    { name: "Clips", price: 20, quantity: 5 },
    { name: "Knife", price: 30, quantity: 1 },
    { name: "Slipper", price: 40, quantity: 3 }
  ];
  
  console.log(findMostExpensiveProduct(products));
  // Output: { name: "Slipper", price: 40, quantity: 3 }