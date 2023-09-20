const mongoose=require('mongoose');

const youtubeSchema=new mongoose.Schema({
  thumbnailPicURL:String,
  channelLogoPicURL:String,
  viewCount:Number,
  durationCount:Number,
  videoCaption:String,
  videoDuration:Number
})

const Youtube=mongoose.model('Youtube',youtubeSchema);

module.exports=Youtube