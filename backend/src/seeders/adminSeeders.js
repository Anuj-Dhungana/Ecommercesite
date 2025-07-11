import { hash } from "bcrypt";
import User from "../models/User.js";
import { hashPassword } from "../utils/utility.js";

const adminSeeder = async () => {
    const admin = await User.findOne({email:"admin@gmail.com"})

       console.log(admin);

       const password = hashPassword ("admin");

       if(!admin){
       await User.create({
            userName:"admin",
            email:"admin@gmail.com",
            password,
            phone:1234567890,
            role:"admin"
        });

        console.log("admin created");
       }else{
        console.log("admin already exist");
       }
};

export default adminSeeder;