const imageService = require("../services/imageService");

const getProductImage = async (req, res) => {
  const imageKey = req.params.imageKey;
  const resolution = req.query.res;
  const frame = req.query.frame;
  const productImage = await imageService.getProductImage(imageKey, resolution, frame);
  res.send( productImage );
}
  
module.exports = {
  getProductImage
}