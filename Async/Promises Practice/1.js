const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello"), 2000);
  });
  
  promise1.then(value => console.log(value));
  console.log("Goodbye");

//   Goodbye
//   Hello (After 2 seconds) 

