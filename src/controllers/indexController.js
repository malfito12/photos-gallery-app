const controllers={}

controllers.index=async(req,res)=>{
    res.render('pages/index')
}

module.exports=controllers