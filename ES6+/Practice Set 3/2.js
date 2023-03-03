const formatProduct=(obj)=>{
    if(obj.inStock){
    console.log(`${obj.name} costs ${obj.price} and is in stock `);
    }
    else{
       console.log(`${obj.name} costing ${obj.price} is not in stock `);
    }
  }
  
  const product = {
    name: 'Socks',
    price: 249,
    inStock: true,
  };
  
  const message = formatProduct(product);
  console.log(message);
  // Socks costs INR 249 and is in stock.