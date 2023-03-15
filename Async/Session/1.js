// const strLength=(name)=>name.length;

// const getLength=(name)=>console.log(`OMG! My name is ${strLength(name)} char long`);

// getLength("Akshay");

//using a Call Back function

const strLength=(name,cb)=>cb(name.length);

strLength("Akshay",(name)=>{console.log(`OMG! My name is ${name} char long!`)})