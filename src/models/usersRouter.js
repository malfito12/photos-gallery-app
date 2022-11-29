const express=require('express')
const router=express.Router()
const userControllers=require('../controllers/usersController')

router.get('/registro-usuarios',userControllers.indexRegisterUser)
router.post('/registro-usuario',userControllers.postUser)

module.exports=router