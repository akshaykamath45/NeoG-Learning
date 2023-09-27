//creating instance of express application
const express = require("express");
const app = express();
app.use(express.json()); //inbuilt middleware to parse json bodies,for post requests

const cars = [
  { id: 1, make: "Toyota", model: "Camry", year: 2022 },
  { id: 2, make: "Honda", model: "Civic", year: 2021 },
  { id: 3, make: "Ford", model: "Mustang", year: 2022 },
  { id: 4, make: "Chevrolet", model: "Corvette", year: 2023 },
  { id: 5, make: "Tesla", model: "Model 3", year: 2021 },
  { id: 6, make: "Nissan", model: "Altima", year: 2022 },
  { id: 7, make: "BMW", model: "X5", year: 2023 },
  { id: 8, make: "Mercedes-Benz", model: "C-Class", year: 2021 },
  { id: 9, make: "Audi", model: "A4", year: 2022 },
  { id: 10, make: "Lexus", model: "RX", year: 2023 },
  { id: 11, make: "Hyundai", model: "Tucson", year: 2021 },
  { id: 12, make: "Kia", model: "Seltos", year: 2022 },
  { id: 13, make: "Mazda", model: "CX-5", year: 2023 },
  { id: 14, make: "Subaru", model: "Outback", year: 2021 },
  { id: 15, make: "Volkswagen", model: "Golf", year: 2022 },
];

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.get("/contact", (req, res) => {
  res.send("This is the contact page");
});

//filtering using query parameters and route parameters

//query parameters,will use res.query to destructure
app.get("/cars", (req, res) => {
  //req.query will store the key value pairs as an object
  //this is done using query parameter
  const { make, model } = req.query; // we can access query parameters for filtering
  let filteredCars;
  if (make) {
    filteredCars = cars.filter(
      (car) => car.make.toLowerCase() === make.toLowerCase()
    );
  }
  if (model) {
    filteredCars = cars.filter(
      (car) => car.model.toLowerCase() === model.toLowerCase()
    );
  }
  //error handling

  if (make || model) {
    if (filteredCars.length == 0) {
      res.status(404).json({ error: "No cars matching query parameters" });
    } else {
      res.json(filteredCars);
    } //when we do res.json is already set to 200
  } else {
    res.json(cars);
  }
});

//using header -->more specific route must come before general route,as it goes from top to bottom
//always place static route before dynamic routess
app.get("/cars/featured", (req, res) => {
  const getFeatureRequest = req.header("x-featured-request");
  if (getFeatureRequest) {
    const featuredCars = cars.filter((car) => car.year > 2022);
    res.json(featuredCars);
  } else {
    res.status(404).json({ error: "Invalid Request" });
  }
});
//route parameters,will use res.params to destrucutre
app.get("/cars/:id", (req, res) => {
  const carId = parseInt(req.params.id);
  // const {id}=req.params;
  const car = cars.find((car) => car.id === carId);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ error: "Car not found" });
  }
});

//using multiple route parameters
app.get("/cars/:make/:model", (req, res) => {
  const make = req.params.make.toLowerCase();
  const model = req.params.model.toLowerCase();
  console.log(make, model);

  let filteredCar = cars.filter(
    (car) =>
      car.make.toLowerCase() === make && car.model.toLowerCase() === model
  );
  if (filteredCar.length === 0) {
    res.status(404).json({ error: "Car not found" });
  } else if (filteredCar) {
    res.json(filteredCar);
  }
});

//Writing Post Requests

app.post("/cars", (req, res) => {
  const newCar = req.body;
  //data vaidation
  if (!newCar.make || !newCar.model || !newCar.year) {
    res.status(404).json({ error: "Make,Model and Year required" });
  } else {
    cars.push(newCar);
    res.status(201).json({ message: "Car added succefully", car: newCar });
  }
});

// Request Body: In a POST request, data is sent in the request body. The server decodes this data and processes it based on the route.
//Security Concerns: Sending data via the request body isn't inherently secure, especially when dealing with sensitive information. HTTPS (SSL/TLS) encryption is essential to secure data during transmission.

// Design of APIs

// /cars - GET will get all cars, POST will create a new car
// /cars/:id - GET will get the id car, POST will update that id car

app.post("/cars/:id", (req, res) => {
  const carId = parseInt(req.params.id);
  const updatedCarData = req.body;

  const findCarToUpdate = cars.find((car) => car.id === carId);
  if (findCarToUpdate) {
    if (!updatedCarData.make || !updatedCarData.model || !updatedCarData.year) {
      res
        .status(404)
        .json({ error: "Make,Model,and Year of Updated Car Required " });
    } else {
      Object.assign(findCarToUpdate, updatedCarData);
      res.json({ message: "Updated car successfully", car: updatedCarData });
    }
  } else {
    res.status(404).json({ error: "Cannot find car to update" });
  }
});

//2.4 Understanding REST

// Most frequently,we use only get and post
// GET: Ask for data.
// POST: Send new data.
// PUT: Update all data.
// PATCH: Update some data.
// DELETE: Remove data.
// OPTIONS: Ask about methods

//While Defining Endpoints
// -->Nouns
// -->Plurals
// -->Predictable
// -->Consistent
// -->Understandable
// -->Hierarchical

// ex01: design endpoints for your products
// Adding a new product -> POST /products
// Retrieving all products -> GET /products
// Updating a product ->POST or PUT products/:id
// Deleting a product ->DELETE products/:id
// Retrieving one product details - GET products/:id

// ex02: design endpoints for posts
// Adding a new post ->POST /posts
// Retrieving all posts ->GET/posts
// Updating a specific post ->POST or PUT posts/:postId
// Retrieving all posts by a user ->GET posts/:userId/posts
// Retrieving a particular post by a user ->GET posts/:userId/:postId

// ex03: design endpoints for customers
// Adding a new customer ->POST /customers
// Retrieving all customers ->GET /customers
// Updating a customer ->POST or PUT /customers/:id
// Deleting a customer ->DELETE /customers/:id
// Retrieving one specific customer’s all orders ->GET /customers/:customerId/orders
// Retrieving one specific customer’s particular order details ->GET /customers/:customerId/orders/:orderId

//https status codes
// 2xx(Success): Things went well.
// 3xx(Redirecton): Go somewhere else or take more steps.
// 4xx(Client Error): You made a mistake or the requested resource can't be found.
// 5xx(Server Error): The server goofed up or can't handle the request.
//Postman

//connecting server,port.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
