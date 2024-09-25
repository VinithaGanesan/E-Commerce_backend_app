const express = require("express");
const {
  createOrder,
  capturePayment,
  getAllOrderByUser,
  getOrderDetails,
} = require("../../controllers/shop/orderController");

const orderRoutes = express.Router();

orderRoutes.post("/create", createOrder);
orderRoutes.post("/capture", capturePayment);
orderRoutes.get("/list/:userId", getAllOrderByUser);
orderRoutes.get("/details/:id", getOrderDetails);

module.exports = orderRoutes;
