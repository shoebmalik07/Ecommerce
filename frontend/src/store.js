import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import {orderCreateReducer, orderDetailsReducer, orderMyListReducer, orderPayReducer} from './reducers/orderReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userUpdateReducer, userProfileReducer } from "./reducers/userReducer";

// localStorage.removeItem('userInfo')

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete : productDeleteReducer,
  productCreate: productCreateReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userList : userListReducer,
  userDelete : userDetailsReducer,
  userUpdate : userUpdateReducer,
  userProfile:userProfileReducer,
  userUpdateProfile : userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails : orderDetailsReducer,
  orderPay : orderPayReducer,
  orderMyList : orderMyListReducer


});
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const paymentMethodFromStorage =localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  :'paypal'
const intialState = {
  cart: { cartItems: cartItemsFromStorage,
          shippingAddress: shippingAddressFromStorage,
          paymentMethod: paymentMethodFromStorage,
           },
  userLogin: { userInfo: userInfoFromStorage },
};

const middlewares = [thunk];
const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
