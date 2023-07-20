import axiosInstance from './index';

const getProductImage = async (imageKey) => {
  const result = await axiosInstance.get(`/api/images/${imageKey}`, { responseType: "arraybuffer" })
  const base64 = btoa(
    new Uint8Array(result.data).reduce(
      (data, byte) => data + String.fromCharCode(byte),'')
  )
  return base64
};

const ImageService = {
  getProductImage
};

export default ImageService;