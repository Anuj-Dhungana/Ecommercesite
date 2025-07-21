import express from 'express';
import userRoutes from './routes/userRoutes.js'
import { configDotenv } from 'dotenv';
import connectDB from './config/db.js';
import product from './models/product.js';  
import productRoutes from './routes/productRoutes.js'
import authRoutes from './routes/authRoutes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
configDotenv();
connectDB()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.get ('/test',(req,res)=>{
    res.cookie("name","John",{
        maxAge:10*60*1000,
        httpOnly:true,
      
    })
    res.status(200).send("cookie set")
    })


app.use('/api/user',userRoutes)
app.use('/api/product',productRoutes)
app.use('/api/auth',authRoutes)


const port = process.env.PORT
app.listen(port,()=>{
    console.log("port start at",port)
})