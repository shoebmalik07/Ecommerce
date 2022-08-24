import { combineReducers, applyMiddleware, createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer} from "./reducers/productReducer";
import { cartReducer } from './reducers/cartReducer'
import {userLoginReducer} from './reducers/userReducer'


const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin:userLoginReducer,
})
const cartItemsFromStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];

const userInfoFromStorage = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo'))
:{}

const intialState = {
    cart: { cartItems: cartItemsFromStorage },
    userLogin : {userInfo: userInfoFromStorage}
}

const middlewares = [thunk]
const store = createStore(
    reducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middlewares))
)

export default store