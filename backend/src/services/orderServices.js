
import order from "../models/order.js";


const createOrder = async (data) => {
const orderData = await order.create(data);
return orderData
};

const getOrderById = async (id) => {
  return await order.findById(id);
};


const getOrderByuserId = async (id) => {
  return await order.find({userId:id});
};   


const updateOrderStatus = async (id, status) => {
  await order.findByIdAndUpdate(id,{orderStatus:status},{new:true})
  
}

const UpdatePaymentStatus = async (id, status) => {
  await order.findByIdAndUpdate(id,{paymentStatus:status},{new:true})
  
}


export { createOrder, getOrderById, getOrderByuserId, updateOrderStatus,UpdatePaymentStatus };