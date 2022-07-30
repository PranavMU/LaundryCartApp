const mongoose =require("mongoose")

const productschema= new mongoose.Schema({
    productType : {
        type:String, required:true
    },
    description : {type:String, required:true
    },
    wash : {type:Number, required:true,default:20},
    press : {type:Number, required:true,default:10},
    drywash : {type:Number, required:true,default:10},
    chemwash : {type:Number, required:true,default:20},
})
const productmodal=mongoose.model("products",productschema)

module.exports=productmodal