const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {checkExistingUser,generatePasswordHash} = require("../utility");
const usermodal = require("../modals/usermodal");


const router = express.Router();


router.get("/",(req,res)=>{
    res.status(200).send("user works");
});

router.post("/register", async (req, res)=> {
    if(await checkExistingUser(req.body.username || req.body.phone)) {
        res.status(400).send("Username exist. Please try with different username");
    } else {
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







module.exports = router;