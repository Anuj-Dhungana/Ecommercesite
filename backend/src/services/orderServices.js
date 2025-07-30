
import order from "../models/order.js";


const createOrder = async (data) => {
const orderData = await order.create(data);
return orderData
};

const getOrderById = async (id) => {
  return await order.findById(id);
};


export { createOrder, getOrderById };