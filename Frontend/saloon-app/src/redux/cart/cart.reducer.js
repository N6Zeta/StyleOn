import {ActionTypes} from './cart.actiontypes';
import { addItemToCart,decreaseItemQuantity } from './cart.utils';



const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
}



const CartReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {
        case ActionTypes.TOGGLE_CART:
            return {
                ...state,
                hidden:!state.hidden
            }
        case ActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        case ActionTypes.DROP_ITEM:
            return {
                ...state,
                cartItems:state.cartItems.filter(item=>item.id!==action.payload.id)
            }

        case ActionTypes.DECREASE_ITEM_QUANTITY:
            return {
                ...state,
                cartItems:decreaseItemQuantity(state.cartItems,action.payload)
            }
            
    
        default:
            return state
           
    }
}

export default CartReducer;