const people = [
    {name: 'Jeena', age: 25}, 
    {name: 'Priya', age: 30}, 
    {name: 'Naina', age: 45}
]

const getName=(acc,{age,name})=>{
if(age>acc.age){
acc={age,name};
}
return acc;
}

const oldestPersonName=(arr)=>arr.reduce(getName,{name:" ",age:0}).name;

console.log(oldestPersonName(people)); 
// Output: 'Naina'