import User from "../models/User.js";

const adminSeeder = async () => {
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
};

export default adminSeeder;