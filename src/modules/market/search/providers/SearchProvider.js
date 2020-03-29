import * as http from '../../../../services/AxiosFactory';

const SearchProvider = {

  getSearch: (searchText) => {

    const searchData = new FormData();

    searchData.append('searchText', searchText);

    return http.post('search=' + searchText, searchData);
  },

  searchResults: (searchResults) => {

    const searchData = new FormData();
    
    return http.post('search-results', searchData);
  }
}

export default SearchProvider;