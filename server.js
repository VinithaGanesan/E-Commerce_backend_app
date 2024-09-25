// configuring dotenv package
require("dotenv").config();

const express = require("express");
const { connectToDatabase } = require("./db/dbconfig");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/authRoutes");
const adminProductsRouter = require("./routes/admin/products-routes");
const shopProductRoutes = require("./routes/shop/products-routes");
const cartRoutes = require("./routes/shop/cart-routes");
const AddressRouter = require("./routes/shop/address-routes");
const orderRoutes = require("./routes/shop/order-routes");
const adminOrderRoutes = require("./routes/admin/order-routes");
const searchRoutes = require("./routes/shop/search-routes");
const reviewRoutes = require("./routes/shop/review-routes");
const FeatureRouter = require("./routes/common/feature-routes");

const app = express();
const PORT = process.env.PORT || 5000;

connectToDatabase();

app.use(
  cors({
    origin: process.env.CLIENT_BASE_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRoutes);
app.use("/api/shop/products", shopProductRoutes);
app.use("/api/shop/cart", cartRoutes);
app.use("/api/shop/address", AddressRouter);
app.use("/api/shop/order", orderRoutes);
app.use("/api/shop/search", searchRoutes);
app.use("/api/shop/review", reviewRoutes);
app.use("/api/common/feature", FeatureRouter);

app.listen(PORT, () => console.log(`Server running on port${PORT}`));
