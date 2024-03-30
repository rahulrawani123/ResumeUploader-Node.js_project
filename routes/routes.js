const express = require("express")
const multer = require("multer")
const {homeget,homepost,listget,detailsget}=require("../controllers/controllers")

const router = express.Router()

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./Images')
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({storage:storage})


router.get("/home",homeget)

router.post("/home",upload.single("image"),homepost)

router.get("/list",listget)

router.get("/list/:name",detailsget)



module.exports=router