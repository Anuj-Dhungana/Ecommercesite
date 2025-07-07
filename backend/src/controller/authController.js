import authService from "../services/authServices.js";

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

export  {register}
