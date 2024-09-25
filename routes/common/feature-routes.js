const express = require("express");
const {
  addFeatureImage,
  getFeatureImages,
} = require("../../controllers/common/featureController");

const FeatureRouter = express.Router();

FeatureRouter.post("/add", addFeatureImage);
FeatureRouter.get("/get", getFeatureImages);

module.exports = FeatureRouter;
