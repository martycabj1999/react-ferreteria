import * as http from './AxiosFactory';

const StateService = {
  getStates: () => {
    return http.get('states');
  }
}

export default StateService;