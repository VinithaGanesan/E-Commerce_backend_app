const Order = require("../../models/Order");

const getAllOrderofAllUsers = async (req, res) => {
  try {
    const orders = await Order.find({});

    if (!orders.length) {
      return res.status(404).json({
        success: false,
        message: "No orders found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "All orders fetched successfully",
      data: orders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Something went wrong",
    });
  }
};

const getOrderDetailsForAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "order fetched successfully",
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Something went wrong",
    });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderStatus } = req.body;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    await Order.findByIdAndUpdate(id, { orderStatus });

    return res.status(200).json({
      success: true,
      message: "Order status is updated successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  getAllOrderofAllUsers,
  getOrderDetailsForAdmin,
  updateOrderStatus,
};
