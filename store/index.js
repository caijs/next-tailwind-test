import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from '../reducers';

const storeFactory = (initialState = {}) => {

    return createStore(
        combineReducers(reducers),
        initialState,
        composeWithDevTools(applyMiddleware(thunk)),
    );
}

export default storeFactory
