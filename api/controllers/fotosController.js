const controllers = {}
const IMAGE = require('../schemas/fotosSchema')
const cloudinary=require('../utils/cloudinary')

//-----------VISTAS-------------------------
controllers.indexfotos = async (req, res) => {
    res.render('pages/fotos/lista_fotos')
}
controllers.registroFotos = async (req, res) => {
    res.render('pages/fotos/registrar_foto')
}
controllers.getImages=async(req,res)=>{
    const array=[]
    try {
        const image= await IMAGE.find({})
        
        res.status(200).json(image)
    } catch (error) {
        console.log(error)   
    }
}

//------------------REGISTROS-----------------------
controllers.imagesSave = async (req, res) => {
    const params = req.body
    // console.log(params)
    // console.log(req.files)
    // console.log(result)
    try {
        const result=await cloudinary.uploader.upload(req.files.image_archive.tempFilePath)
        var image = new IMAGE({
            image_name:params.image_name,
            image_description:params.image_description,
            image_archive:result.secure_url,
            cloudinary_id:result.public_id,
            register_date:new Date()
        })
        image.save()
            .then(() => {
                res.status(200).json({ message: 'Imagen Guardada' })
            })
            .catch(() => {
                res.status(300).json({ message: 'Error, Imagen no Guardada' })
            })
    } catch (error) {
        console.log(error)
    }

}

//------------------DELETE-------------------------
controllers.deleteImage=async(req,res)=>{
    const id=req.body
    try {
        var image=await IMAGE.findById(id.id)
        await cloudinary.uploader.destroy(image.cloudinary_id)
        await image.remove()
        res.status(200).json({message:'imagen eliminada'})
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'error no se pudo eliminar la imagen'})
    }
}
module.exports = controllers