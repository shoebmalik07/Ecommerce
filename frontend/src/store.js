import { combineReducers, applyMiddleware, createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer} from "./reducers/productReducer";


const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
})

const intialState = {}

const middlewares = [thunk]
const store = createStore(
    reducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middlewares))
)

export default store