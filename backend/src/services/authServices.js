import bcrypt from "bcrypt"
import User from "../models/User.js"






const register = async(data) =>{
   const hashedPassword =   bcrypt.hashSync(data.password,10)
  
    const email = data.email;
    const userExist =  await User.findOne({email})


    if(userExist){
        throw new Error("user already exist")
    }
    
    return await User.create({
        email:email,
        password:hashedPassword,
        phone:data.phone,
        userName:data.userName,


})
}
const login = async(data) =>{   

    const doEmailExist = await User.find({email:data.email}) 

    console.log(doEmailExist);


    if(!doEmailExist.length>0){
        throw new Error("user does not exist")
       
    }

   const dbpassword = doEmailExist[0].password
   const isPasswordMatch = bcrypt.compareSync(data.password,dbpassword)
   if(isPasswordMatch){
    return doEmailExist[0];}
   else{
    throw new Error("password did not match")
 
   }

}


export default {register,login}