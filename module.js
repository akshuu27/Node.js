const { string } = require('joi')
const mongoose= require('mongoose')
const { type } = require('os')

const userschema=new mongoose.Schema({

    name:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    },

     password:{
        type:String,
        require:true
    },

     

    mobile:{
        type:Number,
        require:true
    },

    Date:{
        type:Date,
        default:Date.now()
    },
})
module.exports=mongoose.model("UserInfo",userschema)


