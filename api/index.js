const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const path = require('path')
// const { use } = require('./models/indexRouter')
const fileUpload = require('express-fileupload')

//SETTING
app.use(express.json({ limit: '250mb' }));
app.use(fileUpload({
    // useTempFiles:true,
    // tempFileDir:'uploads'

    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    abortOnLimit: true,
    preserveExtension: true,
    safeFileNames: true,
    limits: { fieldSize: 50 * 2024 * 1024 },
}))
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    limit: '250mb',
    extended: true
}))
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, './views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//FAILS STATIC
app.use(express.static('.'))
app.use('/views', express.static(path.join(__dirname, './views')))
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')))
app.use('/jquery', express.static(path.join(__dirname, '../node_modules/jquery/dist')))
app.use('/styles', express.static(path.join(__dirname, './views/styles')))
//ROUTES
app.use('/', require('./models/indexRouter'))
app.use('/', require('./models/fotosRouter'))
app.use('/', require('./models/usersRouter'))
//SERVER

const puerto = app.get('port')
app.listen(puerto, () => {
    console.log('server corriendo en el puerto ' + puerto)
})