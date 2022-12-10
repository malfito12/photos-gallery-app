const express=require('express')
const router=express.Router()
const indexControllers=require('../controllers/indexController')

router.get('/',indexControllers.index)
router.post('/login',indexControllers.login)

module.exports=router