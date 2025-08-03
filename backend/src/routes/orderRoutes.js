import express from 'express';
import {
    createOrder,
    getOrderById,
    getOrderByUserId,
    updateOrderStatus,
    updatePaymentStatus
} from '../controller/orderController.js';
import { isLoggedIn } from '../middleware/isLoggedIn.js';

const router = express.Router();

router.post('/createorder', isLoggedIn, createOrder);
router.get('/getorderbyid/:id', getOrderById);
router.get('/getorderbyuserid', isLoggedIn, getOrderByUserId);
router.put('/updateorderstatus/:id', isLoggedIn, updateOrderStatus);
router.put('/updatepaymentstatus/:id', isLoggedIn, updatePaymentStatus);

export default router;
