const textCrtl ={};

const Text = require('../models/Text');


textCrtl.getResourseText = async (req, res) => {
    const text = await Text.find();
    res.json(text);
}


textCrtl.createResourceText = async (req, res) => {
    const {titulo, contenido, usuario} = req.body;
    const newText =new Text({
      titulo: titulo,
      contenido: contenido,
      usuario: usuario

    });
    await newText.save();
    console.log(newText);
    res.json({message:[]})
};
module.exports = textCrtl;