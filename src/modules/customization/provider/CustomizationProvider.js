import axios from 'axios'

export const getCustomization = () => {
    return new Promise((resolve, reject) => {
        axios.get(process.env.REACT_APP_BACK_URL+'/api/customization')
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export const updateColors = (colorPicker) => {
    let data = {
        "color_primary": colorPicker.colorPrimary,
        "color_secondary": colorPicker.colorSecondary,
        "text_primary": colorPicker.textPrimary,
        "text_secondary": colorPicker.textSecondary,
    }
    return new Promise((resolve, reject) => {
        axios.put(process.env.REACT_APP_BACK_URL+'/api/colors', data,
        {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export const updateLanguage = (language) => {
    let data = {
        "language": language,
    }
    return new Promise((resolve, reject) => {
        axios.put(process.env.REACT_APP_BACK_URL+'/api/language', data,
        {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}