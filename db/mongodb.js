const mongoose = require('mongoose')

mongoose.connection.on('open', ()=> console.log('la base de datos esta conectada') )

async function conexionBD(e){
   
    const URI = process.env.MONGODB_URI;
    await mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology: true,  useCreateIndex: true})
}
module.exports = conexionBD