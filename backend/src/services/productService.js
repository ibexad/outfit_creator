const axiosInstance = require('./index')

/**
 * Get all products by filters
 * @param {string} country Coutnry code (default is de)
 * @param {string} gender MALE/FEMALE
 * @param {string} web_category Products groups
 * @param {string} limit
 * @param {string} offset
 * @return {Promise} All filtered products in jSON format
 */
const getAllProducts = async (gender, web_category, limit, offset, country = 'de') => {
  return axiosInstance.get(`/products/public/query?filters[country]=${country}&filters[gender]=${gender}&filters[web_category]=${web_category}`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {    
    console.log(error);
  });
};

/**
 * Get an specific product by ID 
 * @param {string} productID Product ID
 * @param {string} countryCode Coutnry Code (default is de)
 * @return {Promise} A product in JSON format
 */
const getProduct = async (productID, countryCode = 'de') => {
  return axiosInstance.get(`/products/public/product/${productID}?country=${countryCode}`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {   
    if(error.response.status === 404) {
      return error.response.data
    }
    console.log(error);
  });
};


module.exports = {
  getAllProducts,
  getProduct
}