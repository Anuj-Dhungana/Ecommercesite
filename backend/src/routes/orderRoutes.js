import express from 'express';
import { createOrder } from '../controller/orderController.js';
import { isLoggedIn } from '../middleware/isLoggedIn.js';





const router= express .Router()

router.post('/createorder', isLoggedIn, createOrder)


export default router