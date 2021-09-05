import "./SalonCard.css";

export default function SalonCard({ hit: { name, address } }) {
  return (
    <div className="salon-main">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jon_Snow_Season_8.png/220px-Jon_Snow_Season_8.png"
        alt="Not Available"
      />
      <div className="salon-description">
        <p className="salon-name">{name}</p>
        <p className="salon-address">Delhi-{address.pincode}</p>
        <button className="salon-card-button">&#8594;</button>
      </div>
    </div>
  );
}
