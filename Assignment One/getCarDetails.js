const getCarDetails = (obj) => {
  const { make, model, year } = obj;
  return `Make: ${make}, Model: ${model}, Year: ${year}`;
};

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2015,
  color: "gray",
};

console.log(getCarDetails(car)); // Make: Toyota, Model: Corolla, Year: 2015
