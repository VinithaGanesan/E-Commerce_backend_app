const express = require("express");
const { connectToDatabase } = require("./db/dbconfig");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/authRoutes");
const adminProductsRouter = require("./routes/admin/products-routes");
const shopProductRoutes = require("./routes/shop/products-routes");
const cartRoutes = require("./routes/shop/cart-routes");
const AddressRouter = require("./routes/shop/address-routes");

const app = express();
const PORT = process.env.PORT || 5000;

// configuring dotenv package
require("dotenv").config();

connectToDatabase();

app.use(
  cors({
    origin: "http://localhost:5173",
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
app.use("/api/shop/products", shopProductRoutes);
app.use("/api/shop/cart", cartRoutes);
app.use("/api/shop/address", AddressRouter);

app.listen(PORT, () => console.log(`Server running on port${PORT}`));
