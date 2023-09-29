const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
require("./db");
const User = require("./models/user");

app.get("/", (req, res) => {
  res.send("Connecting User Database with API's");
});

//user signup API
app.post("/signup", async (req, res) => {
  try {
    const addUser = await signup(req.body);
    if (addUser) {
      res.json({ message: "User created successfully", user: addUser });
    } else {
      res.status(404).json({ error: "Error adding user" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed signing up user" });
  }
});

async function signup(userDetails) {
  try {
    const user = new User(userDetails);
    const userSaved = await user.save();
    console.log("New user created ", userSaved);
    return user;
  } catch (e) {
    console.log("Error creating user ", e);
  }
}

//user login API

app.post("/login", async (req, res) => {
  try {
    const loginUser = await login(req.body.email, req.body.password);
    if (loginUser) {
      res.json({ message: "User loggedin succesfully" });
    } else {
      res.status(404).json({ error: "Login failed,invalid credentials." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed logging in user" });
  }
});

async function login(userEmail, userPassword) {
  try {
    const findEmail = await User.findOne({ email: userEmail });
    let checkLogin = false;
    // const findPassword=await User.findOne({password:userPassword});
    // console.log(findEmail.password)
    if (findEmail && findEmail.password === userPassword) {
      console.log("User logged in successfully");
      checkLogin = true;
    } else {
      console.log("Invalid Credentials");
      checkLogin = false;
    }
    return checkLogin;
  } catch (e) {
    throw e;
  }
}
async function addUser() {
  try {
    const newUser = new User({
      email: "xyz@gmail.com",
      password: "xyz123",
      profilePictureUrl: "randomxyz.com",
      username: "xyz",
      nickname: "exwhyzee",
    });
    const userSaved = await newUser.save();
    console.log("User saved successfully ", userSaved);
  } catch (e) {
    console.log("Error creating user ", e);
  }
}
// addUser();

// try{
// login("example@example.com","password123");
// }catch(e){
//   console.log("Login Failed")
// }

async function changePassword(email, password, newPassword) {
  try {
    const user = await User.findOne({ email });
    // console.log(user);
    if (user && user.password === password) {
      console.log("Password Matched,Now updating new password ");
      user.password = newPassword;
      const updatedUser = await user.save();
      console.log("Password Changed for the User ", updatedUser);
    } else {
      console.log("Previous password does not matches");
    }
  } catch (e) {
    console.log("Error finding user : ", e);
  }
}

//use try catch
// changePassword("example@example.com","xyz123","password123");

async function updateProfileUrl(email, password, newProfilePictureUrl) {
  //no need of password validation
  try {
    const user = await User.findOne({ email });
    if (user && user.password === password) {
      console.log("Password Matched Succesfully,now updating profile pic url");
      user.profilePictureUrl = newProfilePictureUrl;
      const savePicUrl = await user.save();
      console.log("Updated profile pic successfully ", savePicUrl);
    } else {
      console.log("Enter correct password");
    }
  } catch (e) {
    console.log("Error updating profile pic url ", e);
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

async function updateContactDetails(email, newContactNumber) {
  try {
    const user = await User.findOne({ email });
    if (user) {
      console.log("Updating contact number");
      user.phoneNumber = newContactNumber;
      const saveUser = await user.save();
      console.log("Updated Contact Number Successfully ", saveUser);
    } else {
      console.log("User not found");
    }
  } catch (e) {
    console.log("Error updating contact details ", e);
  }
}
// updateContactDetails("example@example.com",123456789);

async function findUserByPhoneNumber(phoneNumber) {
  try {
    const user = await User.findOne({ phoneNumber });
    if (user) {
      console.log("User found succeffully with username", user.username);
    } else {
      console.log("Sorry,user not found ");
    }
  } catch (e) {
    console.log("Error finding phone number ", e);
  }
}
// findUserByPhoneNumber(123456789);

async function readAllUsers() {
  try {
    const findUsers = await User.find({});
    console.log("All users ", findUsers);
  } catch (e) {
    console.log("Error finding users ", e);
  }
}
// readAllUsers()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// async function deleteAllUsers(){
//   try{
//     const deleteUsers=await User.deleteMany({});
//     console.log("Deleted all users successfully ");
//   }catch(e){
//     console.log("Error deleteing users ",e);
//   }
// }
// deleteAllUsers();
