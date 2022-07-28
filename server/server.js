const express=require("express");
const mongoose=require("mongoose");
const app=express();
const usermodal=require("./modals/user")

const cors=require("cors")
var bodyParser = require('body-parser')
app.use(cors())

const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.DATABASE)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT,()=>{
    console.log("server started @ : " +process.env.PORT)
});
