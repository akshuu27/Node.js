const { console } = require('inspector');
var mango= require('mongodb')
const mongoose= require('mongoose')

const mongurl="mongodb+srv://akshata:AS413317@cluster0.tavel.mongodb.net/"

mongoose.connect(mongurl)
//  default connection

const db=mongoose.Connection;

//  bind for error event
db.on('error',console.error.bind(console ,'mongodb error'))

db.once('open',()=>{
    console.log("connection created");



db.createcollection('mydatabase', (err, result)=>{
    if(err){
        console.error("error while creating collection");
    }else{
        console.log("database is created");
    }

    mongoose.connection.close()
})

})