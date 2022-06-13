const Image = require('../models/Image')

async function addImage(req, res){
    try{
        const{
         titulo,
         imagenUrl,
         imagenUrlRemote,
         usuario
        } = req.body


        const image =Image({
            titulo,
            imagenUrl,
            imagenUrlRemote,
            usuario,
        })

        
        if(req.file){
            const {filename} = req.file
            image.setImgUrl(filename)
            image.setImgUrl(filename)
            
        }
        const imageStored = await image.save()

        res.status(201).send({imageStored})
    }catch(e){
        res.status(500).send({message: e.mesage})

    }
}

async function getImages (req, res){
    const images = await Image.find().lean().exec()
    res.status(200).send({images})

}

module.exports = {
    addImage,
    getImages
}