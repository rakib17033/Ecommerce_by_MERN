import {createStore} from 'redux'; 

import { combineReducers, applyMiddleware } from 'redux';

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from './reducers/productsReducer';

const reducer = combineReducers({
    product: productsReducer
})
let initialState = {}

const middleWare = [thunk];
const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleWare)));
export default store;



