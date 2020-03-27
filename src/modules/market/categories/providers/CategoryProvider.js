import * as http from '../../../../services/AxiosFactory';

const CategoryService = {

  getCategories: () => {
    return http.get('categories');
  },

  getCategoryById: (category_id) => {
    return http.get('/category/' + category_id);
  }
}

export default CategoryService;