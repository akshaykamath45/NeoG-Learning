const getOddNumbers = (arr) => {
  const requiredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      requiredArray.push(arr[i]);
    }
  }
  return requiredArray;
};
console.log(getOddNumbers([2, 6, 7, 3, 8, 9, 13])); // [7, 3, 9, 13]
