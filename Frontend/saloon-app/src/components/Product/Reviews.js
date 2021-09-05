import React from 'react'
import {CUSTOMER_REVIEW} from '../../constants/productConstants'
import {RatingComponent}  from "../RatingComponent/RatingComponent";


export default function Reviews({reviews}) {
    const renderCustomerReviews = () => {
        return reviews.map(review => {
            return (
                <>
                    <span className=" body-regular rating"> {review.rating} </span>{" "}
                    <RatingComponent value={review.rating} size={21} stars={1} />{" "}
                    <span className="rev-title body-regular"> {review.title}</span>
                    <div className="rev-desc body-small"> {review.review}</div>
                </>
            );
        }); 
    }

    return (
        <>
            <div className="review-container">
                <h5 className="H5-heading">
                    {CUSTOMER_REVIEW}({reviews.length})
                </h5>
                {renderCustomerReviews()}
            </div>

            <style jsx>
                {`
                    .review-container {
                    }
                    .review-container .rev-desc {
                        margin: 1rem 0 2rem 0;
                    }
                    .review-container .rating {
                        margin: 0 !important;
                    }
                `}
            </style>
        </>
    );
}
