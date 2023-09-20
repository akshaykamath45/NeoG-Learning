const mongoose=require("mongoose");
const Maker=require("./maker")
const carSchema=new mongoose.Schema({
  model:String,
  type:String,
  maker:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Maker'
  }
})

const Car=mongoose.model('Car',carSchema);

module.exports=Car;