import mongoose from "mongoose";
import adminSeeder from "../seeders/adminSeeders.js";
import constant from "./constant.js";

const connectDB = async () => {
    try {
       await mongoose.connect(constant.MONGO_URI);
       console.log("Database connected");

       adminSeeder();

    } catch (error) {
        console.log(error);
        
    }
};

export default connectDB;