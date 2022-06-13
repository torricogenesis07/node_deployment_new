require('dotenv').config()
const app = require('./app')
const conexionBD = require('./db/mongodb')
const {appConfig, db} = require('./config')
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000

async function initApp(){
try{
await conexionBD(db)
app.listen(port, host, ()=> console.log(`levantando servidor en ${port}`))
 }catch(e){
     console.error(e)
     process.exit(0)
 }
}
 initApp(appConfig, db)