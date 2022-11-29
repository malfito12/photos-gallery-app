const mongoose=require('../database/dbConnection')
var PHOTOSCHEMA={
    photo_name:{type:String,index:true},
    photo_desciption:{type:String,index:true},
    photo_image:String,
    register_date:String,
}
const PHOTO=mongoose.model('photos',PHOTOSCHEMA)
module.exports=PHOTO