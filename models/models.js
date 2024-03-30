const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Gender:{
        type:String,
        required:true,
    },
    Locality:{
        type:String,
        required:true,
    },
    City:{
        type:String,
        required:true,
    },
    PinCode:{
        type:Number,
        required:true,
    },
    State:{
        type:String,
        required:true,
    },
    Mobile_no:{
        type:Number,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    job_city:{
        type:String,
        required:true,
    },
    Image:{
        type:String,
    },
})

const Resumedata = mongoose.model("Resumedata",Schema)

module.exports = Resumedata

