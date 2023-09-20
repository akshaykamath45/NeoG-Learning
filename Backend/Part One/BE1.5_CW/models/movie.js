const mongoose=require('mongoose')
const User=require('./user')
//we use enum for pre-defined values
//can use fefault,min,max


const movieSchema=new mongoose.Schema({
  title:{
    type:String,
    requried:true
  },
  releaseYear:{
    type:Number,
    required:true
  },
  genre:[
    {
      type:String,
      enum:[
        'Action',
        'Drama',
        'Comedy',
        'Romance',
        'Thriller',
        'Fantasy',
        'Sci-Fi',
        'Horror',
        'Sports',
        'Musical',
        'Other'
      ]
    }
  ],
  director:{
    type:String,
    required:true
  },
  actors:[
    {
      type:String
    }
  ],
  language:{
    type:String,
    required:true
  },
  country:{
    type:String,
    default:"India"
  },
  rating:{
    type:Number,
    min:0,
    max:10,
    default:0
  },
reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      text: String, // Add a field for review text
    },
  ],
  plot:{
    type:String
  },
  awards:{
    type:String
  },
  posterUrl:{
    type:String
  },
  trailerUrl:{
    type:String
  },

  })
const Movie=mongoose.model('Movie',movieSchema);
module.exports=Movie;