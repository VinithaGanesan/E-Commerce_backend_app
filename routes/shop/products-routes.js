const express = require('express');
const { getFilteredProducts, getProductDetails } = require('../../controllers/shop/productController');

const shopProductRoutes = express.Router();



shopProductRoutes.get('/get-allproducts', getFilteredProducts);
shopProductRoutes.get('/get-allproducts/:id', getProductDetails)


module.exports = shopProductRoutes;