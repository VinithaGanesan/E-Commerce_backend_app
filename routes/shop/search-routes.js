const express = require("express");
const { searchProducts } = require("../../controllers/shop/searchController");

const searchRoutes = express.Router();

searchRoutes.get("/:keyword", searchProducts);

module.exports = searchRoutes;
