import { useState } from "react";
import { RatingComponent } from "../RatingComponent/RatingComponent";
import Reviews from "../Product/Reviews";
import Moment from "react-moment";

import {
  INCLUSIVE,
  RS,
  SELLER,
  CUSTOMER_REVIEW,
} from "../../constants/productConstants";
import Modal from "react-modal";

export default function Hero({ content, reviews, callingFrom }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [serviceplace, setServicePlace] = useState("salon");

  function openModal() {
    setIsOpen(true);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { name, discounted_price, original_price, rating, brand_name, images } =
    content;

  const displayImages = () => {
    return images.map((image, index) => (
      <div
        className="bg-img"
        key={index}
        style={{ backgroundImage: "url(" + image + ")" }}
      >
        {" "}
      </div>
    ));
  };

  const renderProductDetails = () => {
    const dateToFormat = "2015-08-31T16:14:00.000Z";
    return (
      <>
        <h1 className="prod-name H1-heading"> {name}</h1>
        <RatingComponent value={rating} size={30} starts={5} />
        <div className="prod-price h2-heading">
          <span className="H2-heading">
            {" "}
            {RS} {discounted_price}{" "}
          </span>
          <strike>
            <span className="h3-heading">
              {" "}
              {RS}
              {original_price}{" "}
            </span>
          </strike>
          <span className="h3-heading offer">
            ({((original_price - discounted_price) / original_price) * 100}%
            off)
          </span>
        </div>
        <div className="offer tax">{INCLUSIVE}</div>
        {callingFrom === "product" && (
          <div className="prod-brand h3-heading">
            {" "}
            {SELLER} {brand_name}
          </div>
        )}

        {callingFrom === "service" ? (
          <button onClick={openModal}>Book Now</button>
        ) : (
          <h1>Hi</h1>
        )}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <select
              value={serviceplace}
              onChange={(e) => setServicePlace(e.target.value)}
            >
              <option value="home">At Home</option>
              <option value="salon">At Saloon</option>
            </select>
            <select>
              {serviceplace == "salon"
                ? content.available_salon_slots.map((slot) => {
                    // let time = new Date(slot * 1000);
                    return (
                      // <option>
                      <Moment
                        format="dddd, MMMM Do YYYY, h:mm a"
                        date={dateToFormat}
                        unix
                      >
                        {slot}
                      </Moment>
                      // </option>
                    );
                  })
                : content.available_home_slots.map((slot) => (
                    <option>{slot}</option>
                  ))}
            </select>

            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </>
    );
  };

  return (
    <>
      <div className="product-hero-container f-d f-h-c">
        <div className="left-container g-d g-col-2 g-gap-16 ">
          {" "}
          {displayImages()}
        </div>
        <div className="right-container">
          {renderProductDetails()}
          <hr className="divider"></hr>
          <Reviews reviews={reviews} />
        </div>
      </div>
      <style jsx>
        {`
          .product-hero-container {
            height: auto;
            background-color: var(--dove);
          }

          .product-hero-container .divider {
            width: 100%;
            margin-top: 4rem;
          }

          .product-hero-container .bg-img:hover {
            transform: scale(1.2);
            cursor: pointer;
          }
          .product-hero-container .left-container {
            width: 55vw;
            border: 1px solid var(--snowfall);
            margin-right: 5vw;
          }
          .product-hero-container .left-container .bg-img {
            background-image: url(https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2021/4/15/c9db31af-82c0-4dfb-819a-3756f6c4f6641618481572076-1.jpg);
            background-repeat: no-repeat;
            background-position: Top;
            height: 450px;
            margin: 1rem;
          }
          .product-hero-container .right-container {
            width: 35vw;
          }

          .product-hero-container .prod-name,
          .prod-price {
            margin: 1.5rem 0 0 0;
          }

          .product-hero-container .prod-brand,
          .rating {
            margin: 0 0 1rem 0;
          }

          .product-hero-container .tax {
            margin-bottom: 2rem;
          }

          .offer {
            color: var(--go);
          }
          span {
            margin-right: 1rem;
          }
        `}
      </style>
    </>
  );
}
