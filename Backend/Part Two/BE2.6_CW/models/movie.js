const mongoose=require('mongoose')

//we use enum for pre-defined values
//can use default,min,max


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