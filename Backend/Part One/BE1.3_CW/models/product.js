const mongoose=require('./mongoose')

const productSchema=new mongoose.Schema({
  productPicURL:String,
  productName:String,
  productColor:String,
  space:String,
  ram:String,
  productRating:Number,
  ratingCount:Number,
  reviewCount:Number,
  discount:Number,
  productPrice:Number,
  packagingFee:Number,
  offers:String[],
})

const Product=mongoose.model('Product',productSchema);

modul.exports=Product