export function setLanguageAction(language, messages){
    return (dispatch) => {
        dispatch({
            type: 'SET_LANGUAGE',
            payload: { language, messages }
        });
    }
}