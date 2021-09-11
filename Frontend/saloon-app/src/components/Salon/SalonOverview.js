import React, { useState } from "react";
import Reviews from "../Product/Reviews";
import {
  INCLUSIVE,
  RS,
  SELLER,
  CUSTOMER_REVIEW,
} from "../../constants/productConstants";

export default function SalonOverview({ content, reviews }) {
  const [overview, setOverview] = useState(true);

  const salonOverview = () => {
    return content.overview.map((overview) => (
      <p className="body-regular overview-desc">{overview}</p>
    ));
    // return null;
  };

  return (
    <>
      <div className="salon-overview-container tb-pad-d">
        <div className="f-d ">
          <div
            className={` ${overview === true ? "active" : ""} overview`}
            onClick={() => setOverview(true)}
          >
            Overview
          </div>
          <div
            className={` ${!overview && "active"} reviews `}
            onClick={() => setOverview(false)}
          >
            Review
          </div>
        </div>
        <hr className="divider"></hr>
        {overview ? (
          <div>{salonOverview()}</div>
        ) : (
          <Reviews reviews={reviews} />
        )}
      </div>

      <style jsx>{`
        .salon-overview-container {
          // height: 500px;
        }

        .salon-overview-container .overview,
        .reviews {
          margin-right: 5rem;
          font-size: 30px;
          color: var(--batman);
          cursor: pointer;
        }

        .overview-desc {
          // padding: 2rem;
          // margin: 1rem 0 2rem 0;
        }

        .active {
          color: var(--primary) !important;
        }
      `}</style>
    </>
  );
}
