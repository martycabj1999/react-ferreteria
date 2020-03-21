import * as http from '../../../../services/AxiosFactory';

const CategoryService = {
  getCategories: () => {
    return http.get('categories');
  }
}

export default CategoryService;