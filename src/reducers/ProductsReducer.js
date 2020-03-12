//cada reducer tiene su propio state
const initialState = {
    products: [],
    error: null,
    loading: false
}

export default function ( state = initialState, action ){
    switch (action.type) {
        case "SET_PRODUCT":
            return state;
        default:
            return state;
    }
}