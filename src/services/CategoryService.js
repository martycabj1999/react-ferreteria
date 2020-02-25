import * as http from './AxiosFactory';

const CategoryService = {
  getCategories: () => {
    return http.get('categories');
  }
}

export default CategoryService;