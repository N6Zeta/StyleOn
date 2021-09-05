import React from "react";
import { RatingComponent } from "../RatingComponent/RatingComponent";

export default function SalonHero({ content }) {
    const { name, address, original_price, rating, review_id, images, hero_image } = content;

    const renderSalonImages = () => {
        return images.map((image, index) => <img className="bg-img" key={index} src={image} alt="" />);
    };
    return (
        <>
            <div className="salon-hero-container f-d f-h-sb">
                <div className="left-container">
                    <img src={hero_image} alt="" className="bg-image" />
                </div>
                <div className="right-container g-d g-col-2 g-gap-16 ">{renderSalonImages()}</div>
            </div>
            <div className="salon-hero-container tb-pad-d-2 f-d f-h-sb">
                <div className="left">
                    <h1 className="salon-name H1-heading"> {name}</h1>
                    <>
                        <span className="salon-add body-xlarge"> {address.door_no}</span>{" "}
                        <span className="salon-add body-xlarge"> {address.street}</span>{" "}
                    </>
                    <h2 className="salon-add body-xlarge"> {address.district}</h2>
                    <h2 className="salon-add body-xlarge"> {address.state}</h2>
                </div>

                {/* <div className="right">
                    <span className="h3-heading"> {rating} </span>
                    <RatingComponent value={rating} size={32} stars={1} />
                    <span className="h3-heading">{review_id.length} Reviews</span>
                </div> */}
            </div>

            <style jsx>
                {`
                    .salon-hero-container {
                    }

                    .salon-hero-container .left-container {
                        width: 65vw;
                    }

                    .salon-hero-container .left-container .bg-image {
                        height: 500px;
                        width: 100%;
                    }

                    .salon-hero-container .right-container {
                        width: 20vw;
                    }

                    .salon-hero-container .right-container .bg-img {
                        height: 100px;
                        width: 100%;
                    }

                    .salon-hero-container .left {
                        float: left;
                    }

                    .left .salon-name {
                        margin: 0;
                    }

                    .left .salon-add {
                        margin: 4px 0;
                    }

                    .salon-hero-container .right {
                        float: right;
                    }
                `}
            </style>
        </>
    );
}
