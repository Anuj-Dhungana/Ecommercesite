import productServices from "../services/productServices.js"

const createProduct =async(req,res)=>{

    try {
    const product =req.body

    if(!product){
        return res.status(400).send("product is required")
    
    }

    if(!product.price && !product.productName){
        return res.status(400).send("price is required")
    }

    const data = await productServices.createProduct(product)
    res.status(200).json({
        message:"product created successfully",
        data
    })
} catch (error) {
    console.log(error);
    res.status(501).json({
        message:"error occured while creating product",
        error
    })
}
}

export  {createProduct};