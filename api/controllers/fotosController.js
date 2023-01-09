const controllers = {}
const IMAGE = require('../schemas/fotosSchema')

//-----------VISTAS-------------------------
controllers.indexfotos = async (req, res) => {
    res.render('pages/fotos/lista_fotos')
}
controllers.registroFotos = async (req, res) => {
    res.render('pages/fotos/registrar_foto')
}
controllers.getImages=async(req,res)=>{
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
    params["register_date"] = new Date()
    try {
        var image = new IMAGE(params)
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
        await IMAGE.findByIdAndDelete(id.id)
        res.status(200).json({message:'imagen eliminada'})
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'error no se pudo eliminar la imagen'})
    }
}
module.exports = controllers