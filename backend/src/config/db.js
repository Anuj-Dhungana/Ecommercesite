import mongoose from "mongoose";
import adminSeeder from "../seeders/adminSeeders.js";

const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI);
       console.log("Database connected");

       adminSeeder();

    } catch (error) {
        console.log(error);
        
    }
};

export default connectDB;