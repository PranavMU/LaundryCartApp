const express=require("express")
const orderModel=require("../modals/ordermodal")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");




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

router.get('/orders',(req,res)=>{
     if(req.headers.authorization) {
            try {
              const email = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
              orderModel.find({user: email}).then((orders)=> {
                  res.status(200).send(orders);
              })
            } catch(err) {
              res.status(403).send("User Not Authorized")
            }
          } else {
              res.status(400).send("Missing Authorization token")
          }
    });

module.exports=router