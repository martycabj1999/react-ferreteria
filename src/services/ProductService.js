import * as http from './AxiosFactory';

const ProductService = {
  getById: (productId) => {
    //return http.get('products/' + productId );
  },
  getProducts: () => {
    return http.get('admin/products');
  },
  postProduct: (product) => {

    const productData = new FormData();
    productData.append('name', product.name);
    productData.append('price', product.price);
    productData.append('description', product.description);
    productData.append('long_description', product.long_description);
    productData.append('category_id', product.category_id);

    return http.post('admin/products', productData);
  },
  deleteProduct: (id) => {
    return http.deletex('admin/products/', {id:id});
  }
}

export default ProductService;