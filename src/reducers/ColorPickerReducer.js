//cada reducer tiene su propio state
const initialState = {
    color: [],
    error: null,
    loading: false
}

export default function ( state = initialState, action ){
    switch (action.type) {
        case "SET_COLOR":
            return state;
            break;
        default:
            return state;
            break;
    }
}