import {ActionTypes} from './cart.actiontypes'

export const toggleCart = () =>(
    {
       type:ActionTypes.TOGGLE_CART
}
)

export const addItem = item =>({
    type:ActionTypes.ADD_ITEM,
    payload:item
}) 

export const dropItem = item =>({
    type : ActionTypes.DROP_ITEM,
    payload:item
})

export const decreaseItemQuantity = item =>({
    type:ActionTypes.DECREASE_ITEM_QUANTITY,
    payload:item
})