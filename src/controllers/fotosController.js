const controllers={}

controllers.indexfotos=async(req,res)=>{
    res.render('pages/fotos/lista_fotos')
}
controllers.registroFotos=async(req,res)=>{
    res.render('pages/fotos/registrar_foto')
}

module.exports=controllers