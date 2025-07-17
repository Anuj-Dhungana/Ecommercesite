import express from 'express'
import { register, login, forgotPassword, verifyOtp } from '../controller/authController.js'

import Otp from '../models/otp.js'
import { sendMail } from '../utils/sendMail.js'
import bcrypt from 'bcrypt'
import User from '../models/User.js'

const router = express.Router()

router.post ('/register',register)
router.post ('/login',login)
// router.post ('/forgotPassword', forgotPassword)
router.post ('/forgotPassword', forgotPassword)
router.post("/verify-otp", verifyOtp)

router.post("/reset-password", async(req,res) => {
    try{
        const {password} = req.body
        const email = req.cookies.userEmail;

        if(!email || !password){
            throw new Error("Email and password required");
        }

        const doesUserExist = await User.findOne({email});

        if(!doesUserExist){
            throw new Error("User not registered")
        }

        if(
            !doesUserExist.otpExpiresAt ||
            doesUserExist.otpExpiresAt < new Date() 
        ) {
            throw new Error("User cannot change password")
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const data = await User.findOneAndUpdate(
            {email}, 
            {password: hashedPassword, otpExpiresAt: null}, 
            {new:true});

            res.clearCookie("userEmail");
        
        res.status(200).json({
            message:"Password changed successfully",
            data,
        });

    } catch (error){
        console.log(error.message) 
        res.send(error.message)
    }
})

router.get("/get-all-otps", async (req, res) => {
  try {
    const data = await Otp.find();
    res.json({ message: "Otps fetched successfully", data });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
}
});

export default router