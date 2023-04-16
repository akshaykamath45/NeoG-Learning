// 1. Write an ES6 function that takes in an array of objects representing users and returns an array of names with all the letters capitalized.

export const capitalizeLetters = (arr) => {
  return arr.map(({ name }) => name.toUpperCase());
};

const sounds = [
  {
    name: "rain",
    sound: "tap tap tap",
  },
  {
    name: "fire",
    sound: "blaze",
  },
  {
    name: "water",
    sound: "slosh slosh",
  },
];

console.log(capitalizeLetters(sounds)); // Output: ["RAIN", "FIRE", "WATER"]
