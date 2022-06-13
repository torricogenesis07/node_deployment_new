const {Schema, model}=require('mongoose');

const metadataFormSchema =new Schema({
    titulo: String,
    resumen: String,
    areaConocimiento: String,
    relacionAreas: String,
    autor: String,
    nivel: String,
    modeloAprendizaje: String,
    licencia: String

});

module.exports = model('Metadataform', metadataFormSchema);