const printProductDetails=({name,specification,price})=>{
    const {capacity,size}=specification;
    return `${name} which is of ${size} has a capacity of ${capacity}.`
  }
  const product = {
    name: 'Apple MacBook Air 2020',
    specification: {
      capacity: '256GB',
      size: '13.3 Inch',
    },
    price: 82900,
  }
  console.log(printProductDetails(product)) 
  // Apple MacBook Air 2020 which is of 13.3 Inch, has a capacity of 256GB.