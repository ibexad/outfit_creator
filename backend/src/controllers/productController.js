const productService = require("../services/productService");

const getAllProducts = async (req, res) => {
  const gender = req.query.gender;
  const webCategory = req.query.webCategory;
  const allproducts = await productService.getAllProducts(gender, webCategory);
  res.send({ status: "OK", data: allproducts });
}

const getProduct = async (req, res) => {
  const productId = req.params.productId;
  const product = await productService.getProduct(productId);
  res.send({ status: "OK", data: product });
};

module.exports = {
  getAllProducts,
  getProduct  
}