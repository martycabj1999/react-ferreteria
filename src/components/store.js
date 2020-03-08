import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const store =createStore(
    reducer,
    compose( applyMiddleware(thunk),

        typeof window === 'object' && 
            typeof window._REDUX_DEVTOOLS_EXTENSION_ !== 'undefined' ?
                window._REDUX_DEVTOOLS_EXTENSION_() : f => f
    )

);

export default store;