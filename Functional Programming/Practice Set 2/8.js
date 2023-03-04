const names = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan",  "shayam"]

const isNamesGreaterThan8=(names)=>names.find((name)=>name.length>8);

console.log(isNamesGreaterThan8(names));
// Output: "Geetanjali"