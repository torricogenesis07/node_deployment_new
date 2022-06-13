const mongoose = require('mongoose')

const Schema = mongoose.Schema
const AudioSchema = Schema({
    titulo: String,
    idAudio: String
    
})


 module.exports = mongoose.model('Audio', AudioSchema)