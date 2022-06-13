const config ={
    appConfig:{
        host: process.env.APP_HOST,
        port: process.env.PORT
    },
  
    db: {
        port: process.env.PORT_DB,
        host: process.env.HOST,
        db_name: process.env.NAME_DB
    }
    
}

module.exports = config