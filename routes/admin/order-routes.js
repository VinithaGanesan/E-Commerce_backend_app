const express = require("express");
const {
  getAllOrderofAllUsers,
  getOrderDetailsForAdmin,
  updateOrderStatus,
} = require("../../controllers/admin/orderController");

const adminOrderRoutes = express.Router();

adminOrderRoutes.get("/get", getAllOrderofAllUsers);
adminOrderRoutes.get("/details/:id", getOrderDetailsForAdmin);
adminOrderRoutes.put("/update/:id", updateOrderStatus);

module.exports = adminOrderRoutes;
