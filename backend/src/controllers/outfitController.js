const productService = require("../services/productService");
const imageService = require("../services/imageService");

const WOMEN_SHIRT = "Blouses,WCA00122,WCA00121";
const WOMEN_PANTS = "Pants,WCA00172,WCA00173,WCA00171";
const WOMEN_ACCESSORIES = "Accessories,WCA01156,WCA01159,WCA01155,WCA01152,WCA01158,WCA01153,WCA01157,WCA01154";

const MEN_SHIRT = "shirts,WCA02211";
const MEN_PANTS = "Pants,WCA02252,WCA02251,WCA02253";
const MEN_ACCESSORIES = "Accessories,WCA02305,WCA02306,WCA02304,WCA02303,WCA02308,WCA02309,WCA02307,WCA02301,WCA02302";

const getRandomOutfit = async (req, res) => {  
  const gender = req.query.gender.toUpperCase();
  const shirt = gender === "MALE" ? MEN_SHIRT : gender === "FEMALE" ? WOMEN_SHIRT : null;
  const pants = gender === "MALE" ? MEN_PANTS : gender === "FEMALE" ? WOMEN_PANTS : null;
  const accessories = gender === "MALE" ? MEN_ACCESSORIES : gender === "FEMALE" ? WOMEN_ACCESSORIES : null;

  try {
    Promise.all([
      productService.getAllProducts(gender, shirt),
      productService.getAllProducts(gender, pants),
      productService.getAllProducts(gender, accessories)
    ])
    .then((results) => {
      const outfit = results.map((res) => res.items[Math.floor(Math.random() * res.items.length)]);      
      res.send({ status: "OK", data: outfit });
    })
    .catch(err => {
      console.log(err);
      res.status(400).send({ status: "400", data: "Bad request" });
    });    
  }
  catch {
    throw Error("Promise failed");
  }  
}

module.exports = {
  getRandomOutfit
}