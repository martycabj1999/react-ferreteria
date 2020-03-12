import * as http from './AxiosFactory';

const ProductService = {
  getById: (productId) => {
    //return http.get('products/' + productId );
  },
  getProducts: () => {
    return http.get('admin/products');
  },
  postProduct: (product) => {
    return http.post('admin/products', product);
  }
}

export default ProductService;