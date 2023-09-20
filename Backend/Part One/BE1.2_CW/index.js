const mongoose = require('mongoose')
const fs=require('fs')
const { MongoClient } = require('mongodb')
require('./db')
const Student=require('./models/student')
const Youtube=require('./models/youtube');
const Car=require('./models/car')
const Movie=require('./models/movie')

//read json data
const jsonData=fs.readFileSync("movies.json","utf8");
const moviesData=JSON.parse(jsonData);

async function addStudent(){
  const newStudent=new Student({
  registrationNumber:"IN7383743",
  studentID:123456,
  studentName:"Alveena S. Khudus",
  guardianName:"Salam Khudus",
  grade:"1st A",
  emergencyNumber:979054171,
    
  })
  try{
    const saveStudent=await newStudent.save();
    console.log("New student added ",saveStudent);
  }
  catch(error){
    console.log("Error in adding student ",error)
  }
}
addStudent()

async function addVideo(){
  const newVideo=new Youtube({
  thumbnailPicURL:"https://images.unsplash.com/photo-1693705969271-f102327fce79",
  channelLogoPicURL:"https://images.unsplash.com/photo-1693760946158-1486b5456ed3",
  viewCount:69,
  durationCount:10,
  videoCaption:"Preparing for Government Exams?",
  videoDuration:99
  })
  try{
    const saveVideo=await newVideo.save();
    console.log("New video added ",saveVideo);
  }
  catch(error){
    console.log("Error in adding student ",error)
  }
}
addVideo();

async function addCar(){
  const newCar=new Car({
    make:"Mahindra",
    model:"XUV 700",
    year:2023
  })
  try{
    const saveCar=await newCar.save();
    console.log("Saved Car Successfully ",saveCar);
  }catch(e){
    console.log("Error in adding car ",e);
  }
}
addCar();

async function seedDatabase(){
  try{
    for(const movieData of moviesData){
       const newMovie=Movie({
          title:movieData.title,
          genre:movieData.genre,
          director:movieData.director,
          releaseYear:movieData.releaseYear,
          actor:movieData.actor,
          language:movieData.language,
          country:movieData.country,
          rating:movieData.rating,
          plot:movieData.plot,
          awards:movieData.awards,
          posterUrl:movieData.posterUrl,
          trailerUrl:movieData.trailerUrl,
      })
      await newMovie.save();
      console.log(`Movie ${newMovie.title} seeded successfully`)
    }
    console.log('Database seeded succesfully')
  }catch(e){
    console.log("Error seeding database ",e)
  }finally{
    mongoose.disconnect();
  }
}
seedDatabase();


async function createMovie(){

  try{
      const newMovie=Movie({
   title: 'New Movie',
  releaseYear: 2023,
  genre: ['Drama'],
  director: 'Director Name',
  actors: ['Actor 1', 'Actor 2'],
  language: 'Hindi',
  country: 'India',
  rating: 7.5,
  plot: 'Plot of the movie',
  awards: 'Awards received',
  posterUrl: '<https://example.com/poster.jpg>',
  trailerUrl: '<https://example.com/trailer.mp4>',
  })
    const saveMovie=await newMovie.save();
    console.log(`Movie  ${newMovie.title} saved succefully`,newMovie)
  }catch(error){
    console.log("Error adding movie")
  }
}
createMovie()