const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const imageRoutes = require('./routes/recurso_imagen')
const audioRoutes = require('./routes/recurso_audio')
const textRoutes = require('./routes/recurso_texto')
const metadataRoutes = require('./routes/route_metadataform')

const app = express()
app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/public', express.static(`${__dirname}/storages/imagenes`))
app.use('/api', imageRoutes)
app.use('/api', audioRoutes)
app.use('/api/texto', textRoutes)
app.use('/api/metadataform', metadataRoutes)
module.exports = app
