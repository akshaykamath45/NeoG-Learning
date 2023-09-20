const mongoose = require('mongoose')

require('./db')
const User=require('./models/user')
const Car=require('./models/car');
const Maker=require('./models/maker');
const Movie=require('./models/movie')

//adding data and reference
async function addMaker(makerData){
  try{
    const maker=new Maker(makerData);
    const newMaker=await maker.save();
    console.log("New maker created ",newMaker)

    const carData={
      model:"Car Model XL",
      year:2022,
      maker:newMaker._id
    };
    const car=new Car(carData);
    const newCar=await car.save();
    console.log("New Car  ",newCar)
  }catch(e){
    console.log("Error adding car ",e);
  }
}
// addMaker({
//   name: 'Toyota',
//   logo: 'maker_logo_url1',
//   tagline: 'Quality Cars',
// })

//function to retrieve car and populate its makers details
async function getCarWithMakerDetails(carId){
  try{
    const carWithMaker=await Car.findById(carId).populate('maker');//populate maker field for cars
    console.log("Car with maker details ",carWithMaker);
  }catch(e){
    console.log("Error getting car ",e);
  }
}

getCarWithMakerDetails("650b2d27f6a5cdc23a17741f")// car => _id



//integrating user reviews with movie
async function reviewMovie(movieId,userId,reviewText){
  try{
    const movie=await Movie.findById(movieId);
     const review={
       user:userId,
       text:reviewText
     }
    movie.reviews.push(review)
    await movie.save();
    const updateMovieReview=await Movie.findById(movieId).populate('reviews.user','username profilePictureURL');
    //'reviews.user' ->which one to populate,'username profilePictureURL'->what to populate
    console.log("Updated Reviews for the Movie",updateMovieReview);
  }catch(e){
    console.log("Error updating reviews for the movie ",e);
  }
}
reviewMovie("650612e97add67374607a781","650ab90ad1ab30a3ca699e43","Great Movie")

//650612e97add67374607a781 movie id for dilwale dulhania le jayenge



async function getAllCarDetails(){
  try{
    const cars=await Car.find({});
    console.log("All Cars ",cars);
  }catch(e){
    console.log("Error getting cars ",e)
  }
}
// getAllCarDetails();

async function getAllMovieDetails(){
  try{
    const movies=await Movie.find({});
    console.log("All movies : ",movies);
  }catch(e){
    console.log("Error getting movies ",e);
  }
}
// getAllMovieDetails();

async function getAllUserDetails(){
  try{
    const users=await User.find({});
    console.log("All users ",users);
  }catch(e){
    console.log("Error finding users ",e);
  }
}
// getAllUserDetails();

//delete all cars
// async function deleteAllCars(){
//   try{
//     const deleteCars=await Car.deleteMany({});
//     console.log("Deleted Cars ");
//   }catch(e){
//     console.log("Error deleting cars ",e);
//   }
// }
// deleteAllCars()

// 650ab90ad1ab30a3ca699e43 user id










































async function addUser(){
  try{
  const newUser=new User({
    email:'xyz@gmail.com',
    password:"xyz123",
    profilePictureUrl:"randomxyz.com",
    username:"xyz",
    nickname:"exwhyzee"
  })
  const userSaved=await newUser.save();
    console.log("User saved successfully ",userSaved);
  }catch(e){
    console.log("Error creating user ",e)
  }
}
// addUser();

async function signup(userDetails){
    try{
  const user=new User(userDetails)
  const userSaved=await user.save();
    console.log("New user created ",userSaved);
  }catch(e){
    console.log("Error creating user ",e)
  }
}

async function login(userEmail,userPassword){
  try{
    const findEmail=await User.findOne({email:userEmail})
    // const findPassword=await User.findOne({password:userPassword});
    // console.log(findEmail.password)
    if(findEmail && findEmail.password===userPassword ){
      console.log("User logged in successfully")
    }else{
      console.log("Invalid Credentials")
    }
  }catch(e){
    throw(e);
  }
}
try{
login("example@example.com","password123");
}catch(e){
  console.log("Login Failed")
}

async function changePassword(email,password,newPassword){
  try{
    const user=await User.findOne({email})
    // console.log(user);
    if(user && user.password===password){
      console.log("Password Matched,Now updating new password ");
      user.password=newPassword;
      const updatedUser=await user.save();
      console.log("Password Changed for the User ",updatedUser);
    }else{
      console.log("Previous password does not matches");
    }
  }catch(e){
    console.log("Error finding user : ",e);
  }
}

//use try catch
// changePassword("example@example.com","xyz123","password123");


async function updateProfileUrl(email,password,newProfilePictureUrl){

  //no need of password validation
  try{
    const user=await User.findOne({email})
    if(user && user.password===password){
      console.log("Password Matched Succesfully,now updating profile pic url")
      user.profilePictureUrl=newProfilePictureUrl;
      const savePicUrl=await user.save();
      console.log("Updated profile pic successfully ",savePicUrl);
    }else{
      console.log("Enter correct password")
    }
  }catch(e){
    console.log("Error updating profile pic url ",e);
  }
}
// updateProfileUrl("example@example.com","password123","https://randomxyz.jpg");

// signup({
//   email: 'example@example.com',
//   password: 'password123',
//   profilePictureUrl: 'https://example.com/profile.jpg',
//   username: 'exampleuser',
//   nickname: 'Example Nick',
// })



// signup({
//     email:'xyz@gmail.com',
//     password:"xyz123",
//     profilePictureUrl:"randomxyz.com",
//     username:"xyz",
//     nickname:"exwhyzee"
// })


async function updateContactDetails(email,newContactNumber){
  try{
    const user=await User.findOne({email});
    if(user){
      console.log("Updating contact number");
      user.phoneNumber=newContactNumber;
      const saveUser=await user.save();
      console.log("Updated Contact Number Successfully ",saveUser);
    }else{
      console.log("User not found")
    }
  }catch(e){
    console.log("Error updating contact details ",e);
  }
}
// updateContactDetails("example@example.com",123456789);

async function findUserByPhoneNumber(phoneNumber){
  try{
    const user=await User.findOne({phoneNumber});
    if(user){
      console.log("User found succeffully with username",user.username);
    }else{
      console.log("Sorry,user not found ");
    }
  }catch(e){
    console.log("Error finding phone number ",e)
  }
}
// findUserByPhoneNumber(123456789);

async function readAllUsers(){
  try{
    const findUsers=await User.find({});
    console.log("All users ",findUsers)
  }catch(e){
    console.log("Error finding users ",e);
  }
}
// readAllUsers()



// async function deleteAllUsers(){
//   try{
//     const deleteUsers=await User.deleteMany({});
//     console.log("Deleted all users successfully ");
//   }catch(e){
//     console.log("Error deleteing users ",e);
//   }
// }
// deleteAllUsers();