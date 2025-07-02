import mongoose from "mongoose";    

const productSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: true
    },
    imageurl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: String,
        default: 0
    },
    productDescription: {
        type: String,
       
    },
    isActive: {
        type: Number,
        default: true
    },
    rating: {
        type: Number,
        default: 0
    },
    featured: {
        type: Boolean,
        default: false
    },

    
},{
    timestamps: true})


const product = mongoose.model("product", productSchema);

export default product;