import * as http from './AxiosFactory';

const AuthService = {
  login: (form) => {
    
    const formData = new FormData();

    formData.append('email', form.email);
    formData.append('password', form.password);

    return http.post('login', formData);
  },
  register: (form) => {

    const formData = new FormData();

    formData.append('name', form.name);
    formData.append('lastname', form.lastname);
    formData.append('telephone', form.telephone);
    formData.append('address', form.address);
    formData.append('email', form.email);
    formData.append('password', form.password);

    return http.post('/user', formData);
  }
}

export default AuthService;