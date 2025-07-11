
import authService from "../services/authServices.js";
import jwt from "jsonwebtoken"
import { creatToken } from "../helper/Token.js";


const register = async (req,res)=>{

    try {
    const {email,phone,password,confirmPassword,userName} = req.body;
        console.log(email,phone,password,confirmPassword,userName)
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
        res.status(500).json({
            message: "Internal server error",error:error.message
        })
    }
}

const login = async (req,res)=>{
    
   try{
     const {email,password} = req.body;
    if(!email || !password){throw new Error("All fields are required")}
       
    const data = await authService.login({email,password})

   const  payload = {
       id:data._id,
       userName:data.userName,
       role:data.role,
       phone:data.phone,
       email:data.email
   }


    const token = creatToken(payload);
    res.cookie("authToken",token);

    res.status(200).json({
        message: "User logged in successfully",
        data,
        token
    })
   }catch(error){
    console.log(error.message);
    res.status(400).json({
        message: "Internal server error",error:error.message
    })
   }
   }
    


export  {register,login}
