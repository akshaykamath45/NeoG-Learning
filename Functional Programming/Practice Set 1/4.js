const convertNameToLowerCase=(obj)=>obj.name.toLowerCase();

const getProductNamesInLowerCase=(products)=>products.map(convertNameToLowerCase);

const products = [
  { name: 'Lip Balm', stock: 100 },
  { name: 'PERFUME', stock: 400 },
  { name: 'Socks', stock: 200 }
];
console.log(getProductNamesInLowerCase(products));
// Output: ["lip balm", "perfume", "socks"]