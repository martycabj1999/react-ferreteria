import { Subject } from 'rxjs';

const snackbar = new Subject();

const SnackbarService = {
  show: (payload) => {
    snackbar.next({ autoHide: true, timeout: 2500, ...payload });
  },
  msj: (payload) => {
    snackbar.next({ autoHide: true, timeout: 15000, ...payload });
  },
  hide: () => {
    snackbar.next({ hide: true });
  },
  subscribe: (cb) => {
    snackbar.subscribe(payload => {
      cb(payload);
    });
  }
}

export default SnackbarService;
