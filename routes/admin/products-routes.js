const express = require('express');
const { upload } = require('../../helpers/cloudinary');
const { handleImageUpload, addProduct, editProduct, deleteProduct, fetchAllProducts } = require('../../controllers/admin/productController');

const adminProductsRouter = express.Router();

adminProductsRouter.post('/upload-image', upload.single('my_file'), handleImageUpload);
adminProductsRouter.post('/add-product', addProduct)
adminProductsRouter.put('/edit-product/:id', editProduct)
adminProductsRouter.delete('/delete-product/:id', deleteProduct)
adminProductsRouter.get('/get-allproducts', fetchAllProducts)


module.exports = adminProductsRouter;