// Mostrar una alerta
export function setAuthUserAction(user){
    return(dispatch) => {
        dispatch( setAuthUser(user));
    }
}

const setAuthUser = (user) => ({
    type: "SET_AUTH_USER",
    payload: { user: user.user, token: user.token }
})