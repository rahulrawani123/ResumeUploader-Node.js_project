const express = require('express'); 
const app = express(); 
const path = require('path'); 
const router = require("./routes/routes")
const mongoose = require('mongoose');

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)))

mongoose.connect(process.env.MONGO_URL)
 
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use("/",router)



app.listen(process.env.port || 3000); 
console.log('Running at Port 3000'); 