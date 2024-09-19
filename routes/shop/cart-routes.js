const express = require("express");
const { addToCart, fetchCartItems, updateCartItemQty, deleteCartItem } = require("../../controllers/shop/cartController");

const cartRoutes = express.Router();

cartRoutes.post("/add", addToCart);
cartRoutes.get("/get/:userId", fetchCartItems);
cartRoutes.put("/update-cart", updateCartItemQty);
cartRoutes.delete("/:userId/:productId", deleteCartItem);


module.exports = cartRoutes;
