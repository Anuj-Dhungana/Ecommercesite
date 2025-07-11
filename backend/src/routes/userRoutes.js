import express from 'express';
import { createUser } from '../controller/userController.js';
import { isLoggedIn } from '../middleware/isLoggedIn.js';
import { isAdmin } from '../middleware/isAdmin.js';

const router = express.Router()

router.get('/',isLoggedIn,isAdmin,(req,res)=>{
    const user = req.user
console.log(user);
res.send('route page')
    



    res.send('route page')
})

router.post('/createuser',createUser)

export default router;