const express=require("express")
const orderModel=require("../modals/ordermodal")

const router=express.Router()


const productList={
                type:[
                    {
                        "name":"Shirts",
                        "description":"Lorem Ipsum is simply dummy text"
                    },
                    {
                        "name":"T Shirts",
                        "description":"Lorem Ipsum is simply dummy text"
                    },{
                        "name":"Trousers",
                        "description":"Lorem Ipsum is simply dummy text"
                    },{
                        "name":"Jeans",
                        "description":"Lorem Ipsum is simply dummy text"
                    },{
                        "name":"Boxers",
                        "description":"Lorem Ipsum is simply dummy text"
                    },{
                        "name":"Joggers",
                        "description":"Lorem Ipsum is simply dummy text"
                    },{
                        "name":"Others",
                        "description":"Lorem Ipsum is simply dummy text"
                    },
                ]
}           



router.post("/create",(req,res)=>{
    let sum=parseInt(0)
    let subtotal=parseInt(0)
    for(let i=0;i<req.body.producttype.length;i++){
        sum+=req.body.producttype[i].quantity
        subtotal+=req.body.producttype[i].total
    }
    orderModel.create({orderid:req.body.orderid,producttype:req.body.producttype,items:sum,datetime:req.body.datetime,subtotal:subtotal}).then(()=>{
        res.send("success")
    }).catch((err)=>{
        console.log(err)
    })
})

router.get("/show",(req,res)=>{
    res.status(200).send(productList)
})

module.exports=router