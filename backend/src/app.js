import express from 'express';
import userRoutes from './routes/userRoutes.js'
import { configDotenv } from 'dotenv';
import connectDB from './config/db.js';

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

configDotenv();
connectDB()

app.get ('/',(req,res)=>{
    res.status(200).json({
        message:"get from app.js"
    })
})

app.use('/api',userRoutes)
app.use('/api/product ',()=>{})

const port = process.env.PORT
app.listen(port,()=>{
    console.log("port start at",port)
})