const controllers={}
const USER=require('../schemas/usersSchema')

controllers.indexRegisterUser=async(req,res)=>{
    res.render('pages/usuarios/register_user')
}

controllers.postUser=async(req,res)=>{
    const params=req.body
    params["register_date"]=new Date()
    params["user_rol"]='USUARIO'
    // console.log(params)
    var user=new USER(params)
    user.save().then(()=>{
        res.status(200).json({message:'usuario registrado'})
    })
}

module.exports=controllers