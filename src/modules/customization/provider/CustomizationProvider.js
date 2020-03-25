import * as http from '../../../services/AxiosFactory';

const CustomizationProvider = {

  getCustomization: () => {
    
    return http.get('customization');
    
  },

  updateColors: (colors) => {

    const formData = new FormData();

    formData.append('color_primary', colors.colorPrimary);
    formData.append('color_secondary', colors.colorSecondary);
    formData.append('text_primary', colors.textPrimary);
    formData.append('text_secondary', colors.textSecondary);

    return http.post('customization/edit-colors', formData);
  }
}

export default CustomizationProvider;