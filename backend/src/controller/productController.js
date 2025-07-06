import productService from "../services/productServices.js"


const createProduct =async(req,res)=>{

    try {
    const product =req.body

    if(!product){
        return res.status(400).send("product is required")
    
    }

    if(!product.price && !product.productName ) {
        return res.status(400).send("price is required")
    }

    const data = await productService.createProduct(product)
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



const getProductById = async (req, res) => {
    try{
        if(!req.params.id){
            return res.status(400).send("product id is required")
        }
        const id = req.params.id;
        const data = await productService.getProductById(id);
        res.status(200).json({
            message: "Product fetched successfully",
            data
        });
    }catch(error){
        console.log(error.message);
        res.status(400).send("Error occurred while fetching product");
    }
};

const deleteProductById = async (req, res) => {
    try{
        if(!req.params.id){
            return res.status(400).send("product id is required")
        }
        const id = req.params.id;
        const data = await productService.deleteProductById(id);
        res.status(200).json({
            message: "Product deleted successfully",
            data
        });
    }catch(error){
        console.log(error.message);
        res.status(400).send("Error occurred while deleting product");
    }
};


    
const getAllProducts =async(req,res)=>{
    try {

        console.log(req.query);

        const data = await productService.getAllProducts(req.query);


        res.status(200).json({
            message: "All products fetched successfully",
            data
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).send("Error occurred while fetching products");
    }
};

const updateProduct = async (req, res) => {
   
    const productId = req.params.id;
    const product = req.body;

    try {
        const data = await productService.updateProduct(productId, product);
        res.status(200).json({
            message: "Product updated successfully",
            data
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).json("Error occurred while updating product");
    }
}
export  {createProduct ,getAllProducts,getProductById,deleteProductById,updateProduct};