const sumArrays = (arr1, arr2) => {
    let requiredArray = [];
    let sum=0;
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
      if (i < arr1.length && i < arr2.length) {
        sum=arr1[i] + arr2[i];
        requiredArray.push(sum);
      } else {
        requiredArray.push(NaN);
      }
    }
  
    return requiredArray;
  };
  
  console.log(sumArrays([1, 2, 3, 4], [1, 2, 3, 5])); // [2, 4, 6, 9]