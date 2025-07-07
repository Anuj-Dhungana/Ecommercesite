import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type:Number ,
        required: true,
    },
    role:{
        type:String,
        enum:["Customer","admin",],
        default:"Customer"
    }
},{
    timestamps: true
})  




const User = mongoose.model('User',userSchema)

export default User ;