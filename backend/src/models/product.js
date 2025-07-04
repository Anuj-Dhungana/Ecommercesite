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
    ram: {
        type: Number,
       
    },
    rom: {
        type: Number,
      
    },
    display: {
        type: String,
        
    
    },
    gen:{
        type: String,
       
    },
    brand: {
        type: String,
    },
    uses: {
        type: String,
       enum:["Gaming","student","professional","performance","budget","all purpose"],
    },

    processor: {
        type: String,
       
    },
    
},{
    timestamps: true})


const product = mongoose.model("product", productSchema);

export default product;