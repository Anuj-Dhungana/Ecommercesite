
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

const updateKhaltiPaymentStatus = async (pidx, totalAmount, userId) => {
  const order = await order.findOne({ pidx });
  if (!order) {
    throw new Error("No order found");
  }

  console.log(order.totalAmount);
  // console.log(userId)

  if (order.totalAmount !== totalAmount) {
    throw new Error("Some error occured warning!!");
  }
  // if (order.user !== userId) {
  //   throw new Error("Invalid Operations");
  // }

  const result = await axios.post(
    "https://dev.khalti.com/api/v2/epayment/lookup/",
    { pidx },
    {
      headers: {
        Authorization: `Key ${process.env.KHALTI_LIVE_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(result);

  if (result.data.status !== "Completed") {
    throw new Error("Payment is not completed");
  }
  console.log(result.data.total_amount,order.totalAmount*100)
  if (result.data.total_amount !== order.totalAmount *100) {
    throw new Error("Amount didn't match.");
  }

  return await order.findOneAndUpdate({ pidx }, { paymentStatus: "COMPLETED" });

 
};



export { createOrder, getOrderById, getOrderByuserId, updateOrderStatus,UpdatePaymentStatus };