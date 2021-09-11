import './Cart.css'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toggleCart } from "../../redux/cart/cart.actions";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
    const history = useHistory()
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.cartItems);
    return (
        <div className="cart-dropdown-main">
      <div className="cart-items">
        {items.length ? (
          items.map((item) => <CartItem key={item.id} cartitem={item} />)
        ) : (
          <span className="empty-message">Your Cart is empty</span>
        )}
      </div>
      <button className='checkout-button' onClick={()=>{
        dispatch(toggleCart)
        history.push('/checkout')
      }}>Checkout</button>
            
        </div>
    )
}
