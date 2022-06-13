const multer = require('multer')
const Audio = require('../models/Audio')
const {getConnection} = require('../db/database')

const {GridFSBucket, ObjectID}=require('mongodb')
const {Readable}=require('stream')

const getAudio = (req, res)=>{
    //console.log(req.params.id);
    let idAudio;
    try{
      idAudio = new  ObjectID(req.params.id);
    }catch(error){
        return res.status(400).json({message: 'id no valido en archivo de audio'})

    }

    res.set('content-type', 'audio/mp3');
    res.set('accept-ranges', 'bytes');

    const db = getConnection();
    const contenedor = new GridFSBucket(db, {
        bucketName: 'audios'
    });

    let downloadStream =contenedor.openDownloadStream(idAudio);
    downloadStream.on('data', chunk =>{
       res.write(chunk);
    });

    downloadStream.on('error', ()=>{
        res.sendStatus(404)
    });

    downloadStream.on('end',()=>{
        res.end();

    })


}

async function getAudios (req, res){
    const audios = await Audio.find();
    res.json(audios);
    

}

const saveAudio = (req, res) =>{
    const storage = multer.memoryStorage();
    const audio =multer({
        storage,
        limits:{
         fields: 1,
         fileSize: 9000000,
         files: 1,
         parts:2
        }
    });
    audio.single('archivo_audio')(req, res, (err)=>{
        if(err){
         console.log(err)
         return res.status(400).json({message: err.message})
        }else if(!req.body.titulo){
         return res.status(400).json({message:'El archivo audio no tiene titulo'});   
        }
        let tituloAudio = req.body.titulo
    const readableAudioStream =new Readable();
    readableAudioStream.push(req.file.buffer);
    readableAudioStream.push(null);
    const db = getConnection()
    const bucket = new GridFSBucket(db, {
        bucketName: 'audios'
    })

   let uploadStream = bucket.openUploadStream(tituloAudio)
   const id =uploadStream.id;

   
   readableAudioStream.pipe(uploadStream);

   uploadStream.on('error', ()=>{
       return res.status(500).json({message:'Error al subir el archivo de audio'})

   });

   uploadStream.on('finish', ()=>{
    
    return res.status(201).json({message:'Se ha subido el archivo audio, id:'+ id});
   })
   const newAudio =new Audio({
    titulo: req.body.titulo,
    idAudio: id

  });
  newAudio.save();
  console.log(newAudio);
    }) 
}

module.exports ={
  getAudio,
  getAudios,
  saveAudio,
}