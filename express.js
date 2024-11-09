// const { error } = require('console')
const express = require('express')
const app = express()

const mongoose=require('mongoose')
app.use(express.json())
const router=require('./route')
app.use("/user",router)
const env = require("dotenv")
env.config()

mongoose.connect(process.env.DB_COnnection)

//   if(err) throw err
//   console.log("connection created");
// })

   .then(()=>{
    console.log("connection created");
   })

   .catch((err)=>{
     console.error(err);
   })
app.listen(2000);

//  app.get('/', (req,res)=>{
//     res.send("hello word....!")
//  }).listen(7000)



// app.post('/about',(req, res)=>{
//     res.send("hello world....!")

//   }).listen(7000)

