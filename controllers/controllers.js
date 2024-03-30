const Resumedata = require('../models/models');

async function homeget(req,res){
    return res.render("home")
}

async function homepost(req,res){
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
    const candidates = await Resumedata.find({})
    return res.render("lists",{items:candidates})
}

async function detailsget(req,res){
    const details = await Resumedata.findOne({Name:req.params.name})
    return res.render("details",{items:details})
}







module.exports={
    homeget,
    homepost,
    listget,
    detailsget,
}