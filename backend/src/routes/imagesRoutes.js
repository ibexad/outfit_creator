const express = require("express");
const imagesController = require("../controllers/imageController")
const router = express.Router();

router.get("/:imageKey", imagesController.getProductImage);

module.exports = router;