import './CartItem.css'
export default function CartItem({
    cartitem: { name, imageUrl, discounted_price, quantity },
  }) {
    return (
      <div className="cart-item-main">
        <img src='https://media.gq-magazine.co.uk/photos/5f64c1d006727fa9e16662c5/master/w_320%2Cc_limit/20200918-facewash-01.jpg' alt="loading" />
        <div className="item-details">
          <span className="name">{name}</span>
          <span>
            {quantity} x ${discounted_price}
          </span>
        </div>
      </div>
    );
  }