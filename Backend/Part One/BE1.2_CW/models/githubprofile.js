const mongoose=require('/mongoose');

const githubProfileSchema=new mongoose.Schema({
  profilePicURL:String,
  firstName:String,
  lastName:String,
  username:String,
  description:String,
  followerCount:Number,
  followingCount:Number,
  workPlace:String,
  workLocation:String,
  personalWebstieURL:String,
  socialMediaURL:String
})

const Profile=mongoose.model('Profile',githubProfileSchema);

module.exports=Profile;