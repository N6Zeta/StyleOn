import { memo } from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import StripeCheckoutButton from "../../components/StripeButton/StripeButton";
import './Checkout.css'


function CheckoutPage() {
  const items = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.cartItems.reduce((accumulator,cartItem)=>accumulator+cartItem.quantity*cartItem.price,0));


  return items.length ? (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {items.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <div className="total">
        Total : <span style={{ color: "blue" }}>$ {total}</span>
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  ) : (
    <h3 className="empty-message">Your Cart is Empty</h3>
  );
}

export default memo(CheckoutPage);