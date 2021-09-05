export const addItemToCart = (cartItems,newItem) => {

    var existingCartItem = cartItems.find(item=>item.id===newItem.id)

    if(existingCartItem){
        return cartItems.map(item=>
            item.id===newItem.id?
            {...item,quantity:item.quantity+1}
            :item
        );
    }

return [...cartItems,{...newItem,quantity:1}]

}

export const decreaseItemQuantity = (cartItems,itemToUpdate) =>{
    var existingCartItem = cartItems.find(item=>item.id===itemToUpdate.id)

    if (existingCartItem.quantity===1){
        return cartItems.filter(item=>item.id!==existingCartItem.id)
    }

    return cartItems.map(item=>
        (item.id===itemToUpdate.id?
        {...item,quantity:item.quantity-1}
        :item))
}