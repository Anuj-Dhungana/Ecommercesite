import Product from "../models/product.js";

const createProduct =async(data)=>{

    return await Product.create(data)
};

export default {createProduct}; 