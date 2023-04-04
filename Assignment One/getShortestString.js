const getShortestString = (arr) => {
  let minStringLength = Infinity;
  let minString = " ";
  if (arr.length === 0) {
    return undefined;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length < minStringLength) {
        minString = arr[i];
        minStringLength = arr[i].length;
      }
    }
    return minString;
  }
};

console.log(getShortestString(["primary", "secondary", "education", "exams"])); // exams
