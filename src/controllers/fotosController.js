const controllers={}

controllers.indexfotos=async(req,res)=>{
    res.render('pages/fotos/lista_fotos')
}

module.exports=controllers