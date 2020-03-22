import * as http from '../../../../services/AxiosFactory';

const LoginService = {
  login: (form) => {
    
    const formData = new FormData();

    formData.append('email', form.email);
    formData.append('password', form.password);

    return http.post('login', formData);
  }
}

export default LoginService;