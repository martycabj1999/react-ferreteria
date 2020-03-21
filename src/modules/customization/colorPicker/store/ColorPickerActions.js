import{
    SET_COLORS
} from '../../../../types/types';

export function setColorsAction(colors){
    return (dispatch) => {
        dispatch({
            type: SET_COLORS,
            payload: colors
        });
    }
}