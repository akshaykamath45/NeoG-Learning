const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
require("./db");
const Car = require("./models/car");

async function addNewCar() {
  const newCar = new Car({
    make: "Mahindra",
    model: "XUV700",
    year: 2023,
  });
  try {
    const savedCar = await newCar.save();
    console.log("Car data saved : ", savedCar);
  } catch (error) {
    console.log("Error saving data : ", error);
  }
}

addNewCar();

async function addAnotherCar() {
  const anotherCar = new Car({
    make: "Tata",
    model: "Tiago EV",
    year: 2022,
  });
  try {
    const savedCar = await anotherCar.save();
    console.log("Another car data saved : ", savedCar);
  } catch (error) {
    console.log("Error saving data ", error);
  }
}
addAnotherCar();

async function findAllCars() {
  try {
    const allCars = await Car.find();
    console.log("All cars data in database ", allCars);
  } catch (error) {
    console.log("Error getting data ", error);
  }
}
findAllCars();
