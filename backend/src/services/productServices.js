import Product from "../models/product.js";


const createProduct =async(data)=>{

    return await Product.create(data)
};



const getAllProducts =async(query= {})=>{
  const filter = {}
  if (query.brand) {filter.brand = {$in:query.brand.split(',')}};
  if (query.ram) {filter.ram = {$in:query.ram.split(',').map(n=>parseInt(n))}};
  if (query.rom) {filter.rom = {$in:query.rom.split(',').map(n=>parseInt(r))}}
  if (query.gen) {filter.gen = {$in:query.gen.split(',').map(n=>parseInt(g))}}
  if (query.Product) {filter.ProductName = {$regex:query.Product,$option:'i'}}

  console.log(filter);

 
  return filter 

    const sort = query.sort || -1
    



  return await Product.find(filter);


    
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