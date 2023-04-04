const getCoordinates = (obj) => {
  const { x, y } = obj;
  const arr = [x, y];
  return arr;
};

const point = { x: 5, y: 10 };
console.log(getCoordinates(point)); // [5, 10]
