import axios from "axios";
import {CART_ADD_ITEMS, CARD_REMOVE_ITEMS} from '../constants/cartConstants'

export const addToCart = (qty,id)=>async (dispatch, getState)=>{
    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({
        type:CART_ADD_ITEMS,
        payload:{
            product: data.id,
            name:data.name,
            image:data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id)=>(dispatch,getState)=>{
    dispatch({type:CARD_REMOVE_ITEMS, payload: id})
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}