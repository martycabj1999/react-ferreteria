import * as http from './AxiosFactory';

const ProductService = {
  getById: (productId) => {
    //return http.get('products/' + productId );
  },
  getProducts: () => {
    return http.get('admin/products');
  },
  setProducts: (product) => {
    return http.post('products/create', product);
  },
  editProducts: (product) => {
    return http.put('products/create', product);
  }
}

export default ProductService;