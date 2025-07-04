import express from 'express';
import { createProduct } from '../controller/productController.js';
import { getAllProducts } from '../controller/productController.js';
import { getProductById } from '../controller/productController.js';
import { deleteProductById } from '../controller/productController.js';
import { updateProduct } from '../controller/productController.js';

const router = express.Router()

router.post('/createproduct',createProduct);
router .get('/getallproducts',getAllProducts);
router.get('/getproductbyid/:id',getProductById);
router.delete('/deleteproductbyid/:id',deleteProductById);
router.put('/updateproductbyid/:id',updateProduct);

export default router;