import "./ServiceCard.css";
import { useHistory } from "react-router-dom";

export default function ServiceCard({
  hit: { service_id, image, name, original_price, discounted_price },
}) {
  const history = useHistory();

  return (
    <div className="service-main">
      <img
        src="https://www.dittoapp.in/blog/wp-content/uploads/2016/07/menf1-1024x683.jpg"
        alt="nothing available"
      />
      <div className="service-description">
        <p className="service-name">{name}</p>

        <div className="price-div">
          <span className="original-price">Rs {original_price}</span>
          <span className="discounted-price">Rs {discounted_price}</span>
        </div>

        <p className="discount-value">
          {((original_price - discounted_price) / original_price) * 100}% off
        </p>
        <button
          onClick={(e) => {
            history.push(`/service/${service_id}`);
            e.stopPropagation();
          }}
          className="book-now-button"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
