const mongoose=require('../database/dbConnection')
var PHOTOSCHEMA={
    image_name:{type:String,index:true},
    image_description:{type:String,index:true},
    image_archive:String,
    cloudinary_id:String,
    register_date:String,
}
const PHOTO=mongoose.model('photos',PHOTOSCHEMA)
module.exports=PHOTO