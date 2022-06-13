const {Schema, model}=require('mongoose');

const textSchema =new Schema({
    titulo: String,
    contenido: String,
    usuario: String,  
});

module.exports = model('Text', textSchema);