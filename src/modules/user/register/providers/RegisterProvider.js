import * as http from '../../../../services/AxiosFactory';

const RegisterProvider = {
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

export default RegisterProvider;