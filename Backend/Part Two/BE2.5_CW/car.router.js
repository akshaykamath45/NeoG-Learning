const express = require("express");
const app = express();
app.use(express.json()); //inbuilt middleware to parse json bodies,for post requests

const carRouter = express.Router();


module.exports = carRouter;
