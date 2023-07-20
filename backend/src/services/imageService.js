const axiosInstance = require('./index')

/**
 * Get a product image by IMAGE_KEY
 * @param {string} imageKey The image key is the unique ID of the image
 * @param {string} resolution The resolution specifies the desired resolution. Possible values are: 
 * low (200px lange Kante)
 * mid (400px lange Kante)
 * high (800px lange Kante)
 * higher (1200px lange Kante)
 * @param {string} frame The frame specifies the cropping of the image. Possible values include: 
 * 1_1 (Aspect ratio, for cropping)
 * 2_3 (Aspect ratio, for outfit pictures)
 * 9_6 (Aspect ratio, for outfit pictures)
 * @return {Promise} Product image
 */
const getProductImage = async (imageKey, resolution, frame) => {
  return axiosInstance.get(`/images/image/public/${imageKey}?res=${resolution}&frame=${frame}`, { responseType: 'arraybuffer' })  
  .then((response) => {
    console.log(response.data);
    return response.data;
  })
  .catch((error) => {       
    console.log(error);
  });
}

module.exports = {
  getProductImage
}