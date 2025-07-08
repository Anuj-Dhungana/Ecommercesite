import express from 'express';
import { register } from '../controller/authController.js';
import { login } from '../controller/authController.js';


const router= express.Router()

router.post('/register',register);
router.post('/login',login);


export default router;