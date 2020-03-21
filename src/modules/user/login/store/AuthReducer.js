//cada reducer tiene su propio state
const initialState = {
    token: '',
    user: [],
    error: null,
    loading: false
}

export default function ( state = initialState, action ){
    switch (action.type) {
        case "SET_AUTH_USER":
            return{
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        default:
            return state;
    }
}