const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://malfito12:vivabraun123@dbcluster.yhudn.mongodb.net/photo_gallery_db?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
})
const connection=mongoose.connection
connection.once('open',()=>{
    console.log('Base de datos conectada')
})

module.exports=mongoose