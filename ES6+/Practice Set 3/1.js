
const formatArray=(item)=>{
    console.log(`The array has ${item.length} items, and the first item is "${item[0]}", and the last item is "${item[item.length-1]}"`)

}


const items = ['apple', 'banana', 'orange'];
const message = formatArray(items);
console.log(message);
// The array has 3 items, and the first item is "apple", and the last item is "orange".