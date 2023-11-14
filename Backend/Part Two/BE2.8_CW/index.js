const mongoose = require('mongoose')
const express=require('express')
const app=express();
app.use(express.json());
require('./db')
const User=require('./models/user')

app.get("/",(req,res)=>{
  res.send("Connecting User Database with API's")
})


//user signup API
app.post("/signup",async(req,res)=>{
  try{
    const addUser=await signup(req.body);
    if(addUser){
      res.json({message:"User created successfully",user:addUser})
    }else{
      res.status(404).json({error:"Error adding user"})
    }
  }catch(error){
    res.status(500).json({error:"Failed signing up user"})
  }
})

async function signup(userDetails){
  try{
  const user=new User(userDetails)
  const userSaved=await user.save();
  console.log("New user created ",userSaved);
  return user;
  }catch(e){
    console.log("Error creating user ",e)
  }
}

//user login API
app.post("/login",async(req,res)=>{
  try{
    const loginUser=await login(req.body.email,req.body.password);
    if(loginUser){
      res.json({message:`User loggedin succesfully with the username : ${loginUser.username}`,user:loginUser})
    }else{
      res.status(404).json({error:"Login failed,invalid credentials."})
    }
  }catch(error){
    res.status(500).json({error:"Failed logging in user"})
  }
})

async function login(userEmail,userPassword){
  try{
    const findUser=await User.findOne({email:userEmail})
    
    // const findPassword=await User.findOne({password:userPassword});
    // console.log(findUser.password)
    if(findUser && findUser.password===userPassword ){
      console.log("User logged in successfully")
          return findUser
    }else{
      console.log("Invalid Credentials")
    }
  }catch(e){
    throw(e);
  }
}

//changing password API
app.post("/change-password",async(req,res)=>{
  try{
    const updatePassword=await changePassword(req.body.email,req.body.password,req.body.newPassword)
    
    if(updatePassword){
      res.json({message:"Password changed for the user",user:updatePassword})
    }else{
      res.status(401).json({error:"Failed to verify existing user,Invalid Credentials."})
    }
  }catch(error){
    res.status(500).json({error:"Failed to update the password"})
  }
})
async function changePassword(email,password,newPassword){
  try{
    const user=await User.findOne({email})
 
    if(user && user.password===password){
      console.log("Password Matched,Now updating new password ");
     
      user.password=newPassword;
      const updatedUser=await user.save();
      console.log("Password Changed for the User ",updatedUser);
      return updatedUser
      
    }else{
      console.log("Previous password does not matches");
    }
  
     
  }catch(e){
    console.log("Error finding user : ",e);
  }
}


//updating profile picture API
app.post("/update-profile-picture",async(req,res)=>{
  try{
    const {email,password,newPicUrl}=req.body;
    const updatedUser=await updateProfilePicUrl(email,password,newPicUrl)
    if(updatedUser){
      res.json({message:"Update profile pic url for the user",user:updatedUser})
    }else{
      res.status(401).json({error:"Invalid Credentials,Could not update profile pic "})
    }
  }catch(error){
    res.status(500).json({error:"Failed to update profile pic url"})
  }
})

async function updateProfilePicUrl(email,password,newProfilePictureUrl){
  //no need of password validation
  try{
    const user=await User.findOne({email})
    if(user && user.password===password){
      console.log("Password Matched Succesfully,now updating profile pic url")
      user.profilePictureUrl=newProfilePictureUrl;
      const savePicUrl=await user.save();
      console.log("Updated profile pic successfully ",savePicUrl);
      return user
      //doesn't matter if I return user or savedUser,it would be the smae thing.
    }else{
      console.log("Enter correct password")
    }
  }catch(e){
    console.log("Error updating profile pic url ",e);
  }
}


//updating contact details API
app.post("/update-contact/:email",async(req,res)=>{
  try{
    const email=req.params.email
    // console.log(req.params.email);
    const {contactNumber}=req.body
    // console.log(contactNumber);
    const updatedContact=await updateContactDetails(email,contactNumber)
    if(updatedContact){
      res.json({message:"Updated contact number successfully",user:updatedContact})
    }else{
      res.status(404).json({error:"Cannot update contact details"})
    }
  }catch(error){
    res.status(500).json({error:"Failed to updated contact details for the user"})
  }
})
async function updateContactDetails(email,newContactNumber){
  try{
    const user=await User.findOne({email});
    if(user){
      console.log("Updating contact number");
      user.phoneNumber=newContactNumber;
      const saveUser=await user.save();
      console.log("Updated Contact Number Successfully ",saveUser);
      return saveUser
    }else{
      console.log("User not found")
    }
  }catch(e){
    console.log("Error updating contact details ",e);
  }
}

//finding user by phone number API
app.get("/users/phone/:phoneNumber",async(req,res)=>{
  try{
    const phoneNumber=req.params.phoneNumber;
    const findUser=await findUserByPhoneNumber(phoneNumber)
    if(findUser){
      res.json({message:`Found user with the phone number ${phoneNumber}`,user:findUser})
    }else{
      res.status(404).json({error:"Cannot find user"})
    }
  }catch(error){
    // throw error
    res.status(500).json({error:"Failed to find user"})
  }
})

async function findUserByPhoneNumber(phoneNumber){
  try{
    const user=await User.findOne({phoneNumber});
    if(user){
      console.log("User found succeffully with username",user.username);
      return user;
    }else{
      console.log("Sorry,user not found ");
    }
  }catch(e){
    console.log("Error finding phone number ",e)
  }
}




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













async function readAllUsers(){
  try{
    const findUsers=await User.find({});
    console.log("All users ",findUsers)
  }catch(e){
    console.log("Error finding users ",e);
  }
}
// readAllUsers()

const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
  console.log(`Server is listening on port ${PORT}`);
})


// async function deleteAllUsers(){
//   try{
//     const deleteUsers=await User.deleteMany({});
//     console.log("Deleted all users successfully ");
//   }catch(e){
//     console.log("Error deleteing users ",e);
//   }
// }
// deleteAllUsers();

//Global Middleware

app.use((err,req,res,next)=>{
  console.log(err.stack);
  res.status(500).json({error:"Something went wrong"})
})