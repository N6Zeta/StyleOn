import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import "./ProductCard.css";
import { useHistory } from "react-router-dom";

export default function ProductCard({ hit }) {
  const history = useHistory();
  const { image, product_id, product_name, original_price, discounted_price } =
    hit;
  const dispatch = useDispatch();
  return (
    <div
      onClick={(e) => {
        history.push(`/product/${product_id}`);
      }}
      className="product-main"
    >
      <img
        src="https://media.gq-magazine.co.uk/photos/5f64c1d006727fa9e16662c5/master/w_320%2Cc_limit/20200918-facewash-01.jpg"
        alt="nothing available"
      />
      <div className="product-description">
        <p className="product-name">{product_name}</p>

        <div className="price-div">
          <span className="original-price">Rs {original_price}</span>
          <span className="discounted-price">Rs {discounted_price}</span>
        </div>

        <p className="discount-value">
          {((original_price - discounted_price) / original_price) * 100}% off
        </p>
        <button
          onClick={() => dispatch(addItem(hit))}
          className="add-to-cart-button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
