const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const dotenv = require('dotenv');
const multer = require("multer")();
const userController = require("./components/routes/user");
var bodyParser = require('body-parser')
const app=express();

// parsers
app.use(cors())
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(multer.array());
app.use(cors())


// listening port
app.listen(process.env.PORT,()=>{
    console.log("server started @ : " +process.env.PORT);
});
// db connection
mongoose.connect(process.env.DATABASE);


// base path;
app.get("/",(req,res)=>{
    res.send("backend works");
});


// middleware
app.use("/user",userController);