import * as http from './AxiosFactory';

const ImageService = {
  getImages: () => {
    return http.get('images');
  }
}

export default ImageService;