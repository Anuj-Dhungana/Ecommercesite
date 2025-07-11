import express from 'express';
import { register, login, forgotpassword } from '../controller/authController.js';


const router= express.Router()

router.post('/register',register);
router.post('/login',login);
router.post('/forgotpassword',forgotpassword);


export default router;