import express from "express";
const router = express.Router();
import User from "../models/user.js";

router.post('/register',async (req,res)=>{
    console.log("I got triggered");
    const {name , email , password} = req.body;
    try {

        if(!name || !email || !password){
            return res.json({msg : "Empty fields found"});
        }

        const existingUser =  await User.findOne({email});
        if(existingUser){
            return res.json({msg : "Email already registered"});
        }

        const user = new User({
            name,email,password
        });

        await user.save();
        console.log("User saved Successfully");
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


    if(existingUser.password === password){
        return res.json({msg : "User logged in"});
    }else{
        return res.json({err : "Password doesnt match"});
    }

    

   
})

export default router;