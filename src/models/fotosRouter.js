const express=require('express')
const router=express.Router()
const fotosControllers=require('../controllers/fotosController')

router.get('/fotos',fotosControllers.indexfotos)
router.get('/registro-fotos',fotosControllers.registroFotos)


module.exports=router