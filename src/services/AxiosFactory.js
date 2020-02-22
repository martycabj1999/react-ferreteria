import Axios from 'axios';
import Rx from 'rxjs/Rx';

const axiosInstance = Axios.create({
  withCredential: true,
  baseURL: 'https://amber-survivals.000webhostapp.com/admin/products',
  timeout: 30 * 1000,
  headers: {
    "Content-Type": "application/json"
  },
  validateStatus: function (status) {
    return (status >= 200 && status < 309)
      || status === 401
      || status === 403
      || status === 404
      || status === 416
      || status === 500;
  },
});

export const X_CATALOG_ID = 'X-Catalog-Id';

export function addHeader(field, value) {
  axiosInstance.defaults.headers.common[field] = value;
}

export function getHeader(field) {
  return axiosInstance.defaults.headers.common[field];
}

export function get(url, params) {
  let seed = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
  return Rx.Observable.fromPromise(axiosInstance.get(url, { params: params || {_s: seed} }));
}

export function post(url, body) {
  let seed = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
  if(url.indexOf("?"))  
    url = url+"?_s="+seed;
  else 
    url = url+"&_s="+seed;
  return Rx.Observable.fromPromise(axiosInstance.post(url, body));
}

export function put(url, body) {
  let seed = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
  if(url.indexOf("?"))  
    url = url+"?_s="+seed;
  else 
    url = url+"&_s="+seed;
  return Rx.Observable.fromPromise(axiosInstance.put(url, body));
}

export function deletex(url, body) {
  let seed = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
  if(url.indexOf("?"))  
    url = url+"?_s="+seed;
  else 
    url = url+"&_s="+seed;
  return Rx.Observable.fromPromise(axiosInstance.delete(url, { params: body }));
}

export function setValidator(validator) {
  axiosInstance.interceptors.response.use(validator);
}
