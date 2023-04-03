const user = {
    name: "John",
    age: 30,
    hobbies: ["reading", "painting", "playing guitar"],
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      coordinates: [40.7128, -74.0060]
    }
  }
  
  const {name,age,hobbies,address}=user;
  const {street,coordinates}=address;
  const hobby1=hobbies[0];
  const hobby3=hobbies[2];
  const address1=`${street},at ${coordinates[0]} X ${coordinates[1]}`
  // Your output should look like:
  
  console.log(name) // John
  console.log(hobby1) // reading
  console.log(hobby3) // playing guitar 
  console.log(address1) // 123 Main St, at 40.7128 x -74.0060