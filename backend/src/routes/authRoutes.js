import express from 'express';
import { register, login, forgotpassword } from '../controller/authController.js';
import { generateotp } from '../utils/generateotp.js';
import { sendMail } from '../utils/sendMail.js';
import Otp from '../models/otp.js';

const router= express.Router()

router.post('/register',register);
router.post('/login',login);
// router.post('/forgotpassword',forgotpassword);


router.post('/forgotpassword',async(req,res)=>{
    try{
        const {email} = req.body;
        console.log(email);
        if(!email){throw new Error("email is required")}
        

      const otp = generateotp();

      const newotp = await Otp.create({email:email,otp:otp})
      sendMail(email, otp)
      res.send(newotp)
        
        
    }
    catch(error){
        console.log(error);
        res.send(error)
        
    }
});

router.post("/verify-otp",async(req,res)=>{

    try{
        const {email,otp}=req.body;

        const doesExit= await Otp.findOne({email:email});

        if(!doesExit){
            throw new Error("user does not exist");
        }
    
        if (doesExit.otp !== otp){
            throw new Error("otp did not match");
        } 
       
        res.status(200).json({
            message:"otp verified successfully"
        })

    }catch(error){
        console.log(error.message);
        res.send(error.message)
        
    }   
})

export default router;