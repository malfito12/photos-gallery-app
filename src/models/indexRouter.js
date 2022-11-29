const express=require('express')
const router=express.Router()
const indexControllers=require('../controllers/indexController')

router.get('/',indexControllers.index)

module.exports=router