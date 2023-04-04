const reverseString = (str) => {
  let requiredStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    requiredStr += str[i];
  }
  return requiredStr;
};

console.log(reverseString("neoG Camp")); // pmaC Goen
