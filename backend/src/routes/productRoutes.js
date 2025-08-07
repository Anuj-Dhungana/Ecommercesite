import express, { json } from 'express';
import { createProduct } from '../controller/productController.js';
import { getAllProducts } from '../controller/productController.js';
import { getProductById } from '../controller/productController.js';
import { deleteProductById } from '../controller/productController.js';
import { updateProductById } from '../controller/productController.js';
import { isAdmin } from '../middleware/isAdmin.js';
import { isLoggedIn } from '../middleware/isLoggedIn.js';
import { uploads } from '../config/cloudinary.js';
import axios from 'axios';
import gemini from '../utils/gemini.js';



const router = express.Router()

router.post('/createproduct',uploads.single("images"),createProduct);
router .get('/getallproducts',getAllProducts);
router.get('/getproductbyid/:id',getProductById);
router.delete('/deleteproductbyid/:id',deleteProductById);
router.put("/updateProductById/:id",uploads.single('image'),updateProductById);

router.post('/gemini',async(req,res)=>{

    const product = {
        productName: "macbook pro",
        category: "laptop",
        brand: "apple"
    }

    const result = await gemini(product)
    
    res.send(result)
   
})



export default router;