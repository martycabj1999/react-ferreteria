import * as http from './AxiosFactory';

const AuthService = {
  login: (form) => {
    return http.post('login', form);
  }
}

export default AuthService;