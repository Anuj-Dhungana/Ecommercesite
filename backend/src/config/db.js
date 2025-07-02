import mongoose from "mongoose";
import User from "../models/User.js";
const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI);
       console.log("Database connected");

       const admin = await User.findOne({email:"admin@gmail.com"})

       console.log(admin);

       if(!admin){
       await User.create({
            name:"admin",
            email:"admin@gmail.com",
            password:"admin",
            phone:1234567890,
            role:"admin"
        });

        console.log("admin created");
       }else{
        console.log("admin already exist");
       }

    } catch (error) {
        console.log(error);
        
    }
};

export default connectDB;