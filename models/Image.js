const mongoose = require('mongoose')
const {appConfig}=require('../config')
const Schema = mongoose.Schema
const ImageSchema = Schema({
    titulo: String,
    imagenUrl: String,
    imagenUrlRemote: String,
    usuario: String,
})

ImageSchema.methods.setImgUrl = function setImgUrl(filename){
   const ruta = process.env.URL
   this.imagenUrl = `${ruta}/public/${filename}`
   this.imagenUrlRemote = `https://salty-mountain-79577.herokuapp.com/public/${filename}`
}       

module.exports = mongoose.model('Image', ImageSchema)