const express=require("express")
const orderModel=require("../modals/ordermodal")

const router=express.Router()

router.post("/create",(req,res)=>{
    let sum=parseInt(0)
    for(let i=0;i<req.body.producttype.length;i++){
        sum+=req.body.producttype[i].quantity
    }
    orderModel.create({producttype:req.body.producttype,items:sum,datetime:req.body.datetime,subtotal:req.body.subtotal}).then(()=>{
        res.send("success")
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports=router