const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {checkExistingUser,generatePasswordHash} = require("../utility");
const usermodal = require("../modals/usermodal");



const router = express.Router();


router.get("/",(req,res)=>{
    usermodal.find({email:eyJhbGciOiJIUzI1NiJ9.cHJhbmF2.C6txS99r17Fgj5orWM3eNkJyboYfB-gLkhVrgRXDqto}).then((data)=>{res.status(200).send(data);})
    
});
router.get("/register",(req,res)=>{
    usermodal.find().then((data)=>{
        res.status(200).send({data});
    }).catch((err)=>{
        res.status(400).send(err);
    })
});

router.post("/register", async (req, res)=> {
    if(await checkExistingUser(req.body.name)) {
        res.status(400).send("Username exist. Please try with different username");
    }
    else {
        generatePasswordHash(req.body.password).then((passwordHash)=> {
            usermodal.create({name: req.body.name,
                                email : req.body.email,
                                phone: req.body.phone,
                                password: passwordHash,
                                address: req.body.address,
                                district: req.body.district,
                                state: req.body.state,
                                pincode: req.body.pincode
                            })
                            .then(()=> { 
                                res.status(200).send(`${req.body.name} added successfully`); 
                            }).catch((err)=> {
                                res.status(400).send(err.message)
            })
        });
    }
    
});

router.post("/login", (req, res)=> {
    usermodal.find({$or:[{email: req.body.email},{phone: req.body.phone}]}).then((userData)=> {
        if(userData.length) {
            bcrypt.compare(req.body.password, userData[0].password).then((val)=> {
                if(val) {
                    const authToken = jwt.sign(userData[0].name, process.env.SECRET_KEY);
                    res.status(200).send({authToken});
                } else {
                    res.status(400).send("Invalid Password");
                }
            })
        } else {
            res.status(400).send("Unauthorized user");
        }
    })
});




module.exports = router;