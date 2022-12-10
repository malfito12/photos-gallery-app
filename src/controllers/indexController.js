const controllers={}
const crypto= require('crypto')
const jwt=require('jsonwebtoken')
const keycypher='password123456'
const USER=require('../schemas/usersSchema')

controllers.index=async(req,res)=>{
    res.render('pages/index')
}

controllers.login=async(req,res)=>{
    const params=req.body
    // console.log(params)
    try {
        const passwordCryto=crypto.createHash('md5').update(params.user_password).digest('hex')
        await USER.find({user_name:params.user_name,user_password:passwordCryto})
        .then(resp=>{
            if(resp.length>0){
                jwt.sign({user_name:resp[0].user_name,user_password:resp[0].user_password},keycypher,(err,token)=>{
                    if(err) throw err
                    else{
                        res.status(200).json({token:token})
                    }
                })
            }else{
                res.status(300).json({message:'Usuario no registrado'})
            }
        })
        .catch(err=>console.log(err))
    } catch (error) {
        console.log(error)
    }
}

module.exports=controllers