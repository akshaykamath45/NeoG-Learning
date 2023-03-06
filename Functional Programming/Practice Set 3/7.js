const customers = [
    { name: 'John', age: 25, gender: 'Male' },
    { name: 'Jane', age: 30, gender: 'Female' },
    { name: 'Bob', age: 40, gender: 'Male' },
    { name: 'Alice', age: 35, gender: 'Female' },
  ];
  
  const getMaleCustomers=(arr)=>arr.filter(({gender})=>gender==="Male");
  
  const maleCustomers = getMaleCustomers(customers);
  console.log(maleCustomers); 
  // Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender: 'Male' }]