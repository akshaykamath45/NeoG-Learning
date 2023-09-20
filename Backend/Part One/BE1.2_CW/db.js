const mongoose = require('mongoose')

// Access your MongoDB connection string from secrets
const mongoURI = process.env.MONGODB

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
  })


// const client = new MongoClient(mongoURI)
// client
//   .connect()
//   .then(() => {
//     console.log('Connected to MongoDB using MongoClient')
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB using MongoClient:', error)
//   })
