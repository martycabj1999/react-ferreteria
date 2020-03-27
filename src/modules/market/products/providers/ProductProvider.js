import * as http from '../../../../services/AxiosFactory';

const ProductService = {

  getById: (productId) => {
    //return http.get('products/' + productId );
  },

  getProductById: (productId) => {
    return http.get('products/' + productId );
  },

  getProducts: () => {
    return http.get('admin/products');
  },

  getProductsFeatured: () => {
    return http.get('admin/products-featured');
  },

  getProductsByCategoryId: (category_id) => {
    return http.get('/products-by-category/' + category_id);
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

  putProduct: (product) => {

    const productData = new FormData();
    productData.append('name', product.name);
    productData.append('price', product.price);
    productData.append('description', product.description);
    productData.append('long_description', product.long_description);
    productData.append('category_id', product.category_id);

    return http.post('admin/products/' + product.id + '/edit', productData);
  },

  inactiveProduct: (id) => {
    return http.get('admin/products/' + id + '/inactive');
  },

  deleteProduct: (id) => {
    return http.deletex('admin/products/' + id);
  }

}

export default ProductService;