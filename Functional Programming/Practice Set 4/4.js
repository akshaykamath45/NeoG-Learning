const getString=(acc,str)=>acc+str;

const concatStrings=(arr)=>arr.reduce(getString,"");

//const concatStrings=(arr)=>arr.reduce((acc,str)=>acc+str,"");

console.log(concatStrings(['this', 'is', 'fun'])); // Output: 'thisisfun'