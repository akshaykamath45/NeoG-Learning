const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
  registrationNumber:String,
  studentID:Number,
  studentName:String,
  guardianName:String,
  grade:String,
  emergencyNumber:Number,
})

const Student=mongoose.model('Student',studentSchema);

module.exports=Student