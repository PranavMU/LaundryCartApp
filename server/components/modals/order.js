const mongoose=require("mongoose")

const orderSchema=new mongoose.Schema({
    producttype:[
        {
            type:{
                type:String
            },
            quantity:{
                type:Number
            },
            washtype:{
                type:String
            },
            price:{
                type:Number
            },
            total:{
                type:Number
            }
        }
    ]
    ,
    items:{
        type:Number
    },
    datetime:{
        type:String
    },
    subtotal:{
        type:Number
    }
})

const orderModel=mongoose.model("orders",orderSchema)

module.exports=orderModel