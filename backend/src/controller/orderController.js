import { createOrder as createOrderService } from "../services/orderServices.js";






const createOrder = async (req, res) => {

    try{

        const user = req.user.id

   const order= req.body;

   

   order.userId = user

   const data = await createOrderService(order);
   
   console.log(data);
   res.status(200).json({data,message:"Order created successfully"});}
   catch(error){
       console.log(error.message);
       res.status(400).json({error:error.message,message:"Error occurred while creating order"});
   }
};


export {createOrder};