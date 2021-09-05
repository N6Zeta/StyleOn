import { RatingComponent } from "../RatingComponent/RatingComponent";
import "./TestimonialsCard.css";

export default function TestimonialsCard({
  hit: { name, image, description, rating },
}) {
  return (
    <div className="testimonial-main">
      <div className="testimonial-header">
        <img src={image} alt="nothing available" />
        <h1 className="testimonial-user">{name}</h1>
        <div className="rating-component">
          <RatingComponent value={rating} />
        </div>
      </div>

      <div className="testimonial-content">{description}</div>
    </div>
  );
}
