const Resumedata = require('../models/models');
const mongoose = require('mongoose');

async function homeget(req,res){
    return res.render("home")
}

async function homepost(req,res){
    await connect()
    const newUser = new Resumedata({
        Name:req.body.Name,
        Gender:req.body.Gender,
        Locality:req.body.Locality,
        City:req.body.City,
        PinCode:req.body.Pincode,
        State:req.body.State,
        Mobile_no:req.body.Mobile,
        Email:req.body.Email,
        job_city:req.body.jobcity,
        Image:req.file.path,
       });
       newUser.save()
        .then((user) => {
        console.log('User created:', user);
        })
        .catch((error) => {
        console.error('Error creating user:', error);
        });
    return res.render("home")
}

async function listget(req,res){
    await connect()
    const candidates = await Resumedata.find({})
    return res.render("lists",{items:candidates})
}

async function detailsget(req,res){
    await connect()
    const details = await Resumedata.findOne({Name:req.params.name})
    return res.render("details",{items:details})
}

async function connect(){
    await mongoose.connect('mongodb+srv://rawanirahul93:salman123@resume.uumgzlw.mongodb.net/resumedata?retryWrites=true&w=majority&appName=Resume',);
    console.log("connected succesfully")
} 





module.exports={
    homeget,
    homepost,
    listget,
    detailsget,
    connect,
}