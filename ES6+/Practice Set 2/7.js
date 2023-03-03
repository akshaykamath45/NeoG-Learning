//Method 1
const combineObjects=({a,b},{c,d})=>{
    console.log(`{a: ${a},b: ${b},c: ${c},d: ${d}}`);
 }
 
 //Method 2-->Returning 2 Different Objects,Not Merging
//  const combineObjects=(obj1,obj2)=>{
//      console.log(obj1,obj2);
//  }
 
 const obj1 = {a: 1, b: 2};
 const obj2 = {c: 3, d: 4};
 const combinedObj = combineObjects(obj1, obj2);
 console.log(combinedObj);
 // Expected Output: {a: 1, b: 2, c: 3, d: 4}