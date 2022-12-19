const express=require('express')
const router=express.Router()
const fotosControllers=require('../controllers/fotosController')

router.get('/fotos',fotosControllers.indexfotos)
router.get('/registro-fotos',fotosControllers.registroFotos)
router.get('/get-images',fotosControllers.getImages)
router.post('/guardar-imagen',fotosControllers.imagesSave)


module.exports=router