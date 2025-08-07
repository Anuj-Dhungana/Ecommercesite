import * as orderService from "../services/orderServices.js";
import axios from "axios";

const createOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const order = req.body;
    order.user = userId;

    if (order.paymentMethod === "Khalti") {
      const totalAmount = order.totalAmount;
      const options = {
        return_url: "http://localhost:5173/dashboard",
        website_url: "http://localhost:5173/",
        amount: totalAmount * 100,
        purchase_order_id: Date.now(),
        purchase_order_name: `Order- ${Date.now()}`,
      };

      const result = await axios.post(
        "https://dev.khalti.com/api/v2/epayment/initiate/",
        options,
        {
          headers: {
            Authorization: `Key ${process.env.KHALTI_LIVE_SECRET_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (result.data.pidx) {
        order.pidx = result.data.pidx;
        const khaltiResult = await orderService.createOrder(order);
        khaltiResult.paymentUrl = result.data.payment_url;
        return res.status(200).json({
          data: khaltiResult,
          payment_url: result.data.payment_url,
        });
      } else {
        throw new Error("Khalti payment initiate failed.!");
      }
    } else {
      const newOrder = await orderService.createOrder(order);
      res
        .status(201)
        .json({ data: newOrder, message: "Order created successfully" });
    }
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ error: error.message, message: "Error creating order" });
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

const updateKhaltiPaymentStatus = async (req, res) => {
  try {
    const { pidx, totalAmount } = req.body;
    const userId = req.user.id;
    await orderService.updateKhaltiPaymentStatus(pidx, totalAmount, userId);
    res.status(200).send("Update payment Status");
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Failed to update Payment Status");
  }
};

export {
  createOrder,
  getOrderById,
  getOrderByUserId,
  updateOrderStatus,
  updatePaymentStatus,
  updateKhaltiPaymentStatus,
};
