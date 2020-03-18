import{
    SHOW_ALERT,
    HIDE_ALERT
} from '../types/types';

// Mostrar una alerta
export function showAlert(alert){
    return(dispatch) => {
        dispatch( makeAlert());
    }
}

const makeAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
})