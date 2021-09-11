import { useDispatch } from "react-redux";
import {
  dropItem,
  decreaseItemQuantity,
  addItem,
} from "../../redux/cart/cart.actions";

import './CheckoutItem.css'

export default function CheckoutItem({ cartItem }) {
  const { name, discounted_price, quantity, imageUrl } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src='https://media.gq-magazine.co.uk/photos/5f64c1d006727fa9e16662c5/master/w_320%2Cc_limit/20200918-facewash-01.jpg' alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          onClick={() => dispatch(decreaseItemQuantity(cartItem))}
          className="arrow"
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => dispatch(addItem(cartItem))} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{discounted_price}</span>
      <div
        onClick={() => dispatch(dropItem(cartItem))}
        className="remove-button"
      >
        &#10008;
      </div>
    </div>
  );
}