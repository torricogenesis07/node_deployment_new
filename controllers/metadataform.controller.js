const metadataformCrtl ={};

const Metadataform = require('../models/MetadataForm');


metadataformCrtl.getResourseMetadataform = async (req, res) => {
    const metadataform = await Metadataform.find();
    res.json(metadataform);
}


metadataformCrtl.createResourceMeadataform = async (req, res) => {
    const {titulo, resumen, areaConocimiento, relacionAreas, autor, nivel, 
            modeloAprendizaje, licencia} = req.body;
    const newMetadataform =new Metadataform({
      titulo: titulo,
      resumen: resumen,
      areaConocimento: areaConocimiento, 
      relacionAreas: relacionAreas,
      autor: autor, 
      nivel: nivel,
      modeloAprendizaje: modeloAprendizaje,
      licencia: licencia

    });
    await newMetadataform.save();
    console.log(newMetadataform);
    res.json({message:[]})
};
module.exports = metadataformCrtl;