import { createToken } from "../helper/Token.js";
import Otp from "../models/otp.js";
import authService from "../services/authServices.js";
import jwt from "jsonwebtoken";
import { generateotp } from "../utils/generateotp.js";

const register = async (req,res)=>{

    try {
    const {email,phone,password,confirmPassword,userName} = req.body;

    if(!password || !email || !phone || !confirmPassword || !userName ){

        return res.status(400).json({message: "All fields are required"});
    }

    if(password !== confirmPassword){
        return res.status(400).json({message: "password did not match"})
    }
    const data = await authService.register({
        email,
        phone,
        password,
        userName
    })

    res.status(200).json({
        message: "User registered successfully",
        data
    })
        
    } catch (error) {
        console.log(error.message);
        res.send(500).json({
            message: "Internal server error", error: error.message
        })
    }
}


const login = async (req,res) => {
    try {
        //login function
        const {email,password} = req.body

        if(!email || !password) {
            throw new Error("Missing user credential")
        }

        const data = await authService.login({email,password})
        
        const payload = {
        id:data._id,
        userName:data.userName,
        role:data.role,
        phone:data.phone,
        email:data.email
   }

    const token = createToken(payload);
    res.cookie('authToken',token)
    res.status(200).json({
        message: "Login Successful",
        data,
        token
})
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }

}


const forgotPassword = async(req,res)=>{
    try{
        const { email } = req.body;
       
        res.cookie("userEmail", email)
        if(!email){
            throw new Error("Email is required")
        }
        const data = await authService.forgotPassword({email})
        const otp = generateOTP();  //
        res.send(data);
    } catch (error){
        console.log(error.message);
        res.send(error.message);
    }
}

const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;
    const email = req.cookies.userEmail;

    const data = await authService.verifyOtp({ email, otp });
    res.status(200).json({ data });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

export {register,login,forgotPassword,verifyOtp}
