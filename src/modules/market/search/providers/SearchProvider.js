import * as http from '../../../../services/AxiosFactory';

const SearchProvider = {

  getSearch: (searchText) => {

    const searchData = new FormData();

    searchData.append('searchText', searchText);

    return http.post('search=' + searchText, searchData);
  },

  searchResults: (userId, keywords, coords) => {

    const searchData = new FormData();
    
    if(coords){
      searchData.append('latitude', coords.latitude);
      searchData.append('longitude', coords.longitude);
    }
    if(userId){
      searchData.append('user_id', userId);
    }
    searchData.append('keywords', keywords);
    
    return http.post('search-results', searchData);
  }
}

export default SearchProvider;