const mongoose=require("mongoose")
const Schema=mongoose.Schema

const userschema= new Schema({
    name : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone :{
        type :String,
        required:true,unique:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type :String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    }
})

const usermodal=mongoose.model("users",userschema)

module.exports=usermodal