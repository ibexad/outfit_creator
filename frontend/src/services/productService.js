import axiosInstance from './index';

const outfitCreator = async (gender) => {
  const result = await axiosInstance.get(`/api/outfit?gender=${gender}`)
  return result.data
};

const ProductService = {
  outfitCreator
};

export default ProductService;