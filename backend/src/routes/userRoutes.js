import express from 'express';
import { createUser } from '../controller/userController.js';

const router = express.Router()

router.get('/user',(req,res)=>{
    res.send('route page')
})

router.post('/createuser',createUser)

export default router;