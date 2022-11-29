const mongoose=require('../database/dbConnection')
var USERSCHEMA={
    user_name:{type:String,index:true},
    user_email:{type:String,index:true},
    user_password:String,
    user_password_repeat:String,
    user_rol:String,
    register_date:String
}
const USER=mongoose.model('users',USERSCHEMA)
module.exports=USER
