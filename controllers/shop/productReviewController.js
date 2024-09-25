const Order = require("../../models/Order");
const Product = require("../../models/Product");
const ProductReview = require("../../models/Review");

const addProductReview = async (req, res) => {
  try {
    const { productId, userId, userName, reviewMessage, reviewValue } =
      req.body;

    const order = await Order.findOne({
      userId,
      "cartItems.productId": productId,
      orderStatus: "confirmed",
    });

    if (!order) {
      return res.status(403).json({
        success: false,
        message: "You need to purchase product to review it.",
      });
    }

    const checkExistingReview = await ProductReview.findOne({
      productId,
      userId,
    });

    if (checkExistingReview) {
      return res.status(400).json({
        success: false,
        message: "You already reviewed this product!",
      });
    }

    const newReview = new ProductReview({
      productId,
      userId,
      userName,
      reviewMessage,
      reviewValue,
    });

    await newReview.save();

    const reviews = await ProductReview.find({ productId });
    const totalReviewsLength = reviews.length;
    const averageReview =
      reviews.reduce((sum, reviewItem) => sum + reviewItem.reviewValue, 0) /
      totalReviewsLength;

    await Product.findByIdAndUpdate(productId, { averageReview });

    return res.status(201).json({
      success: true,
      message: "Product review added",
      data: newReview,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Something went wrong",
    });
  }
};

const getProductReviews = async (req, res) => {
  try {
    const { productId } = req.params;

    const reviews = await ProductReview.find({ productId });

    return res.status(200).json({
      success: true,
      message: "Product reviews fetched successfully",
      data: reviews,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Something went wrong",
    });
  }
};

module.exports = { addProductReview, getProductReviews };
