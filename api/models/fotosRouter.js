const express=require('express')
const router=express.Router()
const fotosControllers=require('../controllers/fotosController')
const upload= require('../utils/multer')

router.get('/fotos',fotosControllers.indexfotos)
router.get('/registro-fotos',fotosControllers.registroFotos)
router.get('/get-images',fotosControllers.getImages)
router.post('/guardar-imagen',fotosControllers.imagesSave)
router.post('/delete-image',fotosControllers.deleteImage)


module.exports=router