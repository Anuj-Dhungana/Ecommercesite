import * as orderService from "../services/orderServices.js";
import axios from "axios";

const createOrder = async (req, res) => {
  try {
    const userId = req.user.id;

    console.log(userId.id);

    const order = req.body;

    order.user = userId;

    if (order.paymentMethod === "Khalti") {

      const totalAmount = order.totalAmount
      
      const options = {
        "return_url": "http://localhost:5173/dashboard",
        "website_url": "http://localhost:5173/",
        "amount": totalAmount*100, 
        "purchase_order_id": Date.now(),
        "purchase_order_name": `Order- ${Date.now()}`,
        }


      const result = await axios.post(
        'https://dev.khalti.com/api/v2/epayment/initiate/',options,{
          headers: {
            'Authorization': `Key ${process.env.KHALTI_LIVE_SECRET_KEY}`,
            "Content-Type": "application/json",
          }
        }
        
      )

      console.log(result.data);
      return res .status(200).send(result.data)

    }

    console.log("order")

    const data = await orderService.createOrder(order);

    console.log(data);

    res.status(200).json({ data, message: "Order created sucessfully" });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ error: error.message, message: " error while ordering" });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await orderService.getOrderById(id);
    if (!data) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ data, message: "Order fetched successfully" });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ error: error.message, message: "Error fetching order" });
  }
};

const getOrderByUserId = async (req, res) => {
  try {
    const userId = req.user.id;
    const data = await orderService.getOrderByUserId(userId);
    res.status(200).json({ data, message: "Orders fetched successfully" });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ error: error.message, message: "Error fetching user's orders" });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await orderService.updateOrderStatus(id, status);
    res.status(200).json({ message: "Order status updated successfully" });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ error: error.message, message: "Error updating order status" });
  }
};

const updatePaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await orderService.updatePaymentStatus(id, status);
    res.status(200).json({ message: "Payment status updated successfully" });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ error: error.message, message: "Error updating payment status" });
  }
};

export {
  createOrder,
  getOrderById,
  getOrderByUserId,
  updateOrderStatus,
  updatePaymentStatus,
};

