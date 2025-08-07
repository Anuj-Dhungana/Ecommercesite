import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';


const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    orderNumber: {
        type: String,
        default: ()=>uuidv4()   
    },
    cartItems: {
        type: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "product",
                    required: true
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ]
    },
    Location: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        enum: ['Placed', 'pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
        
    },
    paymentStatus: {
        type: String,
        enum: ['notpaid', 'Paid'],
        default: 'notpaid'
        
    },
    paymentMethod: {
        type: String,
        enum: ['cod', 'khalti'],
        
    },
    totalAmount: {
        type: Number,
        required: true
    },
    pidx: {
        type: String,
       
    },
   

});


const order = new mongoose.model("order", orderSchema);

export default order;