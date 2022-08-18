import {CART_ADD_ITEMS,CARD_REMOVE_ITEMS} from '../constants/cartConstants'

export const cartReducer = (state = {cartItems: []},action)=>{
        switch (action.type){
            case CART_ADD_ITEMS:
                const item = action.payload
                const existsItem = state.cartItems.find((i)=> i.product === item.product)


            if(existsItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map((i)=>
                    i.product === existsItem.product? item:i)
                }
            }else{
                return{
                    ...state,
                    cartItems :[...state.cartItems, item]
                }
            }
            case CARD_REMOVE_ITEMS:
                return{
                    ...state,
                    cartItems: state.cartItems.filter((i)=>
                    i.product!==action.payload)
                }
            default:
                return state
        }
}