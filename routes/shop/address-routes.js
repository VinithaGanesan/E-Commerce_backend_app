const express = require("express");
const {
  addAddress,
  fetchAllAddress,
  deleteAddress,
  editAddress,
} = require("../../controllers/shop/addressController");

const AddressRouter = express.Router();

AddressRouter.post("/add", addAddress);
AddressRouter.get("/get/:userId", fetchAllAddress);
AddressRouter.delete("/delete/:userId/:addressId", deleteAddress);
AddressRouter.put("/update/:userId/:addressId", editAddress);

module.exports = AddressRouter;
