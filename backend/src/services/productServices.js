import Product from "../models/product.js";


const createProduct =async(data)=>{

    return await Product.create(data)
};

const getAllProducts =async()=>{

    return await Product.find({});
};

const getProductById =async(id)=>{   

    return await Product.findById(id);
};

const deleteProductById =async(id)=>{

    return await Product.findByIdAndDelete(id);
};

const updateProduct = async(id,data)=>{
    return await Product.findByIdAndUpdate(id,data,{new:true});

}

export default {createProduct,getAllProducts,getProductById,getProductById,deleteProductById,updateProduct}; 