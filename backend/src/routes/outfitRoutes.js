const express = require("express");
const outfitController = require("../controllers/outfitController")
const router = express.Router();

router.get("/", outfitController.getRandomOutfit);

module.exports = router;