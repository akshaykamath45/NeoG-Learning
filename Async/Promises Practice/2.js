async function async1() {
    console.log("Async function 1");
    return "Result 1";
  }
  
  async function async2() {
    console.log("Async function 2");
    return "Result 2";
  }
  
  async function main() {
    const result1 = await async1();
    console.log(result1);
    const result2 = await async2();
    console.log(result2);
  }
  
  main();

  //Async function 1
// Result 1
// Async function 2
// Result 2