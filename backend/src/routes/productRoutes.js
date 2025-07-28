import express from 'express';
import { createProduct } from '../controller/productController.js';
import { getAllProducts } from '../controller/productController.js';
import { getProductById } from '../controller/productController.js';
import { deleteProductById } from '../controller/productController.js';
import { updateProduct } from '../controller/productController.js';
import { isAdmin } from '../middleware/isAdmin.js';
import { isLoggedIn } from '../middleware/isLoggedIn.js';
import { uploads } from '../config/cloudinary.js';


const router = express.Router()

router.post('/createproduct',uploads.single("images"),createProduct);
router .get('/getallproducts',getAllProducts);
router.get('/getproductbyid/:id',getProductById);
router.delete('/deleteproductbyid/:id',isLoggedIn,isAdmin,deleteProductById);
router.put('/updateproductbyid/:id',isLoggedIn,isAdmin,updateProduct);

export default router;