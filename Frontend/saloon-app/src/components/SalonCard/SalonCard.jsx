import "./SalonCard.css";
import { useHistory } from "react-router-dom";

export default function SalonCard({ hit: { salon_id, name, address } }) {
  const history = useHistory();
  return (
    <div className="salon-main">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jon_Snow_Season_8.png/220px-Jon_Snow_Season_8.png"
        alt="Not Available"
      />
      <div className="salon-description">
        <p className="salon-name">{name}</p>
        <p className="salon-address">Delhi-{address.pincode}</p>
        <button
          onClick={() => {
            history.push(`/salon/${salon_id}`);
          }}
          className="salon-card-button"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
