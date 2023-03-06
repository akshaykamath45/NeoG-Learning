const products = [
    { name: "Toothbrush", price: 29, category: "health" },
    { name: "Coffee Maker", price: 99, category: "home" },
      { name: "iPad", price: 799, category: "electronics" },
    { name: "Smartwatch", price: 199, category: "electronics" },
  ];
  
  const findElectronicsProduct=(arr)=>arr.find(({category})=>category==="electronics");
  
  const electronicsProduct = findElectronicsProduct(products);
  console.log(electronicsProduct); 
  // Output: { name: "iPad", price: 799, category: "electronics" }