const express = require("express");
const productsController = require("../controllers/productController")
const router = express.Router();

router.get("/", productsController.getAllProducts);

router.get("/:productId", productsController.getProduct);

module.exports = router;