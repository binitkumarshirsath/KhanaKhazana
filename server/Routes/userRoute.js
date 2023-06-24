import express from "express";
import bcrypt from 'bcrypt'
const router = express.Router();
import User from "../models/user.js";
import jwt from 'jsonwebtoken';


router.post('/register',async (req,res)=>{
    const saltRounds = 10;
    const {name , email , password} = req.body;
    try {

        if(!name || !email || !password){
            return res.json({msg : "Empty fields found"});
        }

        const existingUser =  await User.findOne({email});
        if(existingUser){
            return res.json({msg : "Email already registered"});
        }

        bcrypt.hash(password,saltRounds,async function(err,hash){
            const user = new User({
                name,email,password : hash
            });
            await user.save();
            return res.json({msg : "user registered successfully"});
        })

        
    } catch (error) {
        console.log("Error found in Registration : " + error);
    }

})

router.post('/login', async (req,res)=>{
    const {email , password} = req.body;
    if(!email || !password){
        return res.json({err : "Empty Fields found"});
    }

    const existingUser = await User.findOne({email});
    if(!existingUser){
        return res.json({msg: "please sign in first"});
    }

    bcrypt.compare(password,existingUser.password,async function(err,result){
        if(result){
            const token =  await jwt.sign({_id : existingUser.id},process.env.JWT_SECRET);
            return res.json({msg : "Logged in successfully" , token});
        }else{
            console.log(err);
            return res.json({msg : "Password incorrect"});
        }
    })

   
})

export default router;