const {MongoClient}=require('mongodb');

let db

MongoClient.connect('mongodb://localhost/bdescueladigital', (err, cliente) =>{
    if(err){
        console.log(err);
        process.exit(0);
    }
    db =cliente.db('bdescueladigital');

});

const getConnection = () => db;

module.exports={
    getConnection
}