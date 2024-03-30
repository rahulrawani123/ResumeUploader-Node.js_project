require("dotenv").config()

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


PORT = process.env.port
app.listen(PORT); 
console.log(`Running at Port ${PORT}`); 