const express = require("express");
const {
  addProductReview,
  getProductReviews,
} = require("../../controllers/shop/productReviewController");

const reviewRoutes = express.Router();

reviewRoutes.post("/add", addProductReview);
reviewRoutes.get("/:productId", getProductReviews);

module.exports = reviewRoutes;
